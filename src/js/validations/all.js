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
        validCleanLongAU: /^61(?!550)[0-9]{0,13}$/,

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

var format = {
    formatTelephone(value) {
        return `formatTelephone(${value})`;
    }
}

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
                if (!value) {
                    return null;
                }
                return phoneValidation.isValid(value);
            },
        },
        convertForModel: function (value) {
            // Do not convert if it's invalid
            if (!phoneValidation.isValid(value)) {
                return value;
            }
            return phoneValidation.clean(value);
        },
        convertForView: function (value) {
            // log('convertForView in: ', value);

            if (!all.telephone.blur.customFormat.call(this, value)) {
                return value;
            }

            return format.formatTelephone(value);
        }
    }
};

export default all;