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

var phoneValidation = r;

///////////////

var all = {
    change: {
        customFormat: function (value) {
            // If there are any invalid characters then FAIL
            if (!phoneValidation.hasValidCharacters(value)) {
                return false;
            }
            // If it's empty after a cleaning then PASS
            if (phoneValidation.clean(value).length === 0) {
                return true;
            }
            // Otherwise verify that it has the right length for a
            // short AU number or an international number
            value = phoneValidation.clean(value);
            return phoneValidation.validCleanShortLengthAU.test(value)
                || phoneValidation.validCleanLongLengthINTL.test(value);
        }
    }
};

export default all;