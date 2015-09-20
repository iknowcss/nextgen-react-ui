import emailValidation from './email';
import trim from 'lodash/string/trim';

var all = {
    email: {
        priority: ['required', 'regexp', 'customFormat'],
        change: {
            customFormat: emailValidation.hasValidCharacters,
        },
        blur: {
            regexp: emailValidation.validEmail,
            required: true
        },
        convertForModel: function (value) {
            if (!value || !emailValidation.isValid(value)) {
                return value;
            }
            return trim(value);
        }
    },
};

export default all;