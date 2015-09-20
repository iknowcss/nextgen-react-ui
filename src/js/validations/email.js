var r = {
    whitespace: /^\s*|\s*$/,
    validCharacters: /^[a-z0-9_\.\-@ ]*$/i,
    validEmail: /^\s*[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}\s*$/i,

    clean: function (value) {
        return value.replace(r.whitespace, '');
    },

    hasValidCharacters: function (value) {
        return r.validCharacters.test(value);
    },

    isValid: function (value) {
        var cleanValue = r.clean(value);
        if (cleanValue.length === 0) {
            return false;
        }
        return r.validEmail.test(cleanValue);
    }
};

export default r;