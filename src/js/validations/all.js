var phoneValidation = (function () {

    var r = {
        validCharacters: /^[0-9 \(\)\+]*$/,
        delimitCharacters: /[ \(\)\+]/,
        delimitCharactersG: /[ \(\)\+]/g,
        startShortAU: /^0/,
        startLongAU: /^61/,
        validCleanShortLengthAU: /^(?=0)[0-9]{1,10}$/,
        validCleanLongLengthINTL: /^(?!0)[0-9]{1,15}$/,
        validCleanLongMobileLengthAU: /^(?=61)[0-9]{1,11}$/,
        validCleanShortAU: /^0(?!550)[0-9]{9}$/,
        validCleanLongAU: /^61(?!550)[0-9]{1,}$/,

        clean: function (value) {
            var stringValue = value.toString();
            return stringValue.replace(r.delimitCharactersG, '');
        },

        isValid: function (value) {
            // Sanity check
            if (typeof value === 'undefined') {
                return false;
            }

            var cleanValue = r.clean(value);
            if (cleanValue.length === 0) {
                return false;
            }
            if (r.startShortAU.test(cleanValue)) {
                return r.validCleanShortAU.test(cleanValue);
            }
            if (r.startLongAU.test(cleanValue)) {
                return r.validCleanLongAU.test(cleanValue);
            }
            return r.validCleanLongLengthINTL.test(cleanValue);
        },

        hasValidCharacters: function (value) {
            return r.validCharacters.test(value);
        }
    };

    return r;

}());

///////////////

var _ = require('underscore');

var all = {
    telephone: {
        change: {
            customFormat: function (value) {
                // If there are any invalid characters then FAIL
                if (!phoneValidation.hasValidCharacters(value)) {
                    return false;
                }

                // If it's empty after a cleaning then PASS
                var cleanValue = phoneValidation.clean(value);
                if (cleanValue.length === 0) {
                    return true;
                }
                // Otherwise verify that it has the right length for a
                // short AU number or an international number
                return phoneValidation.validCleanShortLengthAU.test(cleanValue)
                    || phoneValidation.validCleanLongLengthINTL.test(cleanValue);
            }
        },
        blur: {
            customFormat: function (value) {
                if (_.isUndefined(value)) {
                    return null;
                }

                value = value.toString();

                // First check that only valid chars have been entered
                if (!all.telephone.change.customFormat(value)) {
                    return false;
                }

                // If it's blank then ignore and let the 'required' rule show an error
                if (value === '') {
                    return null;
                }

                // Remove non-digit chars
                value = value.replace(/[ \(\)\+]/g, '');

                // Invalid if there are no digits
                if (value.length < 1) {
                    return false;
                }

                if (value[0] === '0') {
                    //Australian numbers should not start with 0550
                    return (!(/^0550/.test(value)) && value.length === 10);
                } else if (/^61/.test(value)) {
                    //Australian numbers should not start with 0550
                    return (!(/^61550/.test(value)));
                } else if (value.length > 15) {
                    // Check that international doesn't have more than 15 digits
                    return false;
                }

                return true;
            },
        }
    }
};

export default all;