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

export default r;