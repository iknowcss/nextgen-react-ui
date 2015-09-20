var r = {
    validCharacters: /^[a-z0-9_\.\-@ ]*$/i,
    validEmail: /^(\s*)+[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}(\s*)$/,

    hasValidCharacters: function (value) {
        return r.validCharacters.test(value);
    }
};

export default r;