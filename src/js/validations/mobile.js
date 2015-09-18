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
                return phoneValidation.isValidMobileAU(value);
            },
            required: true
        },
        convertForModel: function (value) {
            if (!value || !phoneValidation.isValidMobileAU(value)) {
                return value;
            }
            return phoneValidation.cleanAndShortenAU(value);
        },
        convertForView: function (value) {
            if (!all.mobile.blur.customFormat.call(this, value)) {
                return value;
            }
            return format.formatTelephone(value);
        }
    },
};

export default all;