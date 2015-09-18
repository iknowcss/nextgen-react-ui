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
                // If there are any invalid characters then FAIL
                if (!phoneValidation.hasValidCharacters(value)) {
                    return false;
                }

                // If it's empty after a cleaning then PASS
                var cleanValue = phoneValidation.clean(value);
                if (cleanValue.length === 0) {
                    return true;
                }

                // Verify length constraints for Australian numbers (short and long)
                if (phoneValidation.treatAsShortAU(cleanValue)) {
                    return cleanValue.length <= phoneValidation.shortMaxLengthAU;
                }
                if (phoneValidation.treatAsLongAU(cleanValue)) {
                    return cleanValue.length <= phoneValidation.longMaxLengthAU;
                }
                
                return true;
            }
        },
        blur: {
            customFormat: function (value) {
                if (!value) {
                    return null;
                }

                value = phoneValidation.clean(value);

                if (phoneValidation.treatAsShortAU(value)) {
                    //Mobile numbers should not start with 0550
                    if (!(/^0550/.test(value))) {
                        return ((/^04|05/.test(value)) && value.length === 10);
                    }
                } else if (/^61/.test(value)) {
                    return ((/^614|615/.test(value)) && value.length === 11);
                }
                return false;
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