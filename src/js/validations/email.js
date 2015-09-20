var r = {
    validCharacters: /^[a-z0-9_\.\-@ ]*$/i,

    hasValidCharacters: function (value) {
        return r.validCharacters.test(value);
    }
};

export default r;