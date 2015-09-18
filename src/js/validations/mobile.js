import phoneValidation from './phone';

///////////////

var format = {
    formatTelephone(value) {
        return `formatTelephone(${value})`;
    }
}

///////////////

var _ = require('underscore');

var all = {
    mobile: {
        change: {
            customFormat: function (value) {
                // Check that valid chars have been entered
                var result = /^[0-9 \(\)\+]*$/.test(value);

                if (result) {
                    value = value.replace(/[ \(\)\+]/g, '');
                    // Check that mobile number without 61 doesn't have more than 10 digits
                    if (value[0] === '0') {
                        if (value.length > 10) {
                            return false;
                        }
                    } else if (/^61/.test(value)) {
                        // Check that number with 61 doesn't have more than 11 digits
                        if (value.length > 11) {
                            return false;
                        }
                    }
                }
                return result;
            }
        },
        blur: {
            customFormat: function (value) {
                if (_.isUndefined(value)) {
                    return null;
                }

                value = value.toString();

                // If it's blank then ignore and let the 'required' rule show an error
                if (value === '') {
                    return null;
                }

                if (!this.validationTypes.mobile.change.customFormat(value)) {
                    return false;
                }

                // Remove non-digit chars
                value = value.replace(/[ \(\)\+]/g, '');
                // Check that mobile number without 61 doesn't have more than 10 digits
                if (value[0] === '0') {
                    //Mobile numbers should not start with 0550
                    if (!(/^0550/.test(value))) {
                        return ((/^04|05/.test(value)) && value.length === 10);
                    }
                } else if (/^61/.test(value)) {
                    return ((/^614|615/.test(value)) && value.length === 11);
                }
                return false;
                //var re = /^(?:\+?61|0)4|5\)?(?:[ -]?[0-9]){7}[0-9]$/;
                //return re.test(value);
            },
            required: true
        },
        convertForModel: function (value) {
            if (!this.validationTypes.mobile.blur.customFormat.call(this, value)) {
                return value;
            }
            value = value.replace(/[ \(\)\+]/g, '');
            value = value.replace(/^61/, '0');
            return value;
        },
        convertForView: function (value) {
            if (!this.validationTypes.mobile.blur.customFormat.call(this, value)) {
                return value;
            }
            return format.formatTelephone(value);
        }
    },
};

export default all;