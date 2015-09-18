var all = {
    change: {
        customFormat: function (value) {
            // Check that valid chars have been entered
            var result = /^[0-9 \(\)\+]*$/.test(value);

            if (result) {
                value = value.replace(/[ \(\)\+]/g, '');
                // Check that Australian doesn't have more than 10 digits
                if (value[0] === '0') {
                    if (value.length > 10) {
                        return false;
                    }
                } else {
                    // Check that international doesn't have more than 15 digits
                    if (value.length > 15) {
                        return false;
                    }
                }
            }

            return result;
        }
    }
};

export default all;