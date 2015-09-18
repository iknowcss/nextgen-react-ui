 var r = {
    validCharacters: /^[0-9 \(\)\+]*$/,
    delimitCharacters: /[ \(\)\+]/,
    delimitCharactersG: /[ \(\)\+]/g,
    startShortAU: /^0/,
    startLongAU: /^61/,
    startLong: /^(?!0)/,
    validCleanShortAU: /^0(?!550)[0-9]{9}$/,
    validCleanShortMobileAU: /^0(?!550)[45][0-9]{8}$/,
    validCleanLongAU: /^61(?!550)[0-9]{0,13}$/,
    validCleanLongMobileAU: /^61(?!550)[45][0-9]{8}$/,

    shortMaxLengthAU: 10,
    longMaxLengthINTL: 15,
    longMaxLengthAU: 11,

    clean: function (value) {
        var stringValue = value.toString();
        return stringValue.replace(r.delimitCharactersG, '');
    },

    treatAsShortAU: function (value) {
        return r.startShortAU.test(value);
    },

    treatAsLongAU: function (value) {
        return r.startLongAU.test(value);
    },

    treatAsLong: function (value) {
        return r.startLong.test(value);
    },

    isValid: function (value) {
        // Sanity check
        if (typeof value === 'undefined') {
            return false;
        }
        // Fail on invalid characters
        if (!r.validCharacters.test(value)) {
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
        return cleanValue.length <= r.longMaxLengthINTL;
    },

    isValidMobileAU: function (value) {
        var cleanValue = r.clean(value);
        if (r.treatAsShortAU(cleanValue)) {
            return r.validCleanShortMobileAU.test(cleanValue);
        } else if (r.treatAsLongAU(cleanValue)) {
            return r.validCleanLongMobileAU.test(cleanValue);
        }
        return false;
    },

    hasValidCharacters: function (value) {
        return r.validCharacters.test(value);
    }
};

export default r;