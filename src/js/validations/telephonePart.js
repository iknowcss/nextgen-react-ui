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
    telephone: {
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

                // Verify length constraints for short Australian numbers or
                // long international numbers
                if (phoneValidation.treatAsShortAU(cleanValue)) {
                    return cleanValue.length <= phoneValidation.shortMaxLengthAU;
                }
                if (phoneValidation.treatAsLong(cleanValue)) {
                    return cleanValue.length <= phoneValidation.longMaxLengthINTL;
                }

                return true;
            }
        },
        blur: {
            customFormat: function (value) {
                if (!value) {
                    return null;
                }
                return phoneValidation.isValid(value);
            },
        },
        convertForModel: function (value) {
            // Do not convert if it's invalid
            if (!phoneValidation.isValid(value)) {
                return value;
            }
            return phoneValidation.clean(value);
        },
        convertForView: function (value) {
            // Do not convert if it's invalid
            if (!phoneValidation.isValid(value)) {
                return value;
            }
            return format.formatTelephone(value);
        }
    }
};

export default all;