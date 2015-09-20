import emailValidation from './email';
import trim from 'lodash/string/trim';


var all = {
    email: {
        priority: ['required', 'regexp', 'customFormat'],
        change: {
            customFormat: emailValidation.hasValidCharacters,
        },
        blur: {
            regexp: /^(\s*)+[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}(\s*)$/,
            required: true
        },
        convertForModel: function (value) {
            if (!all.email.blur.regexp.test(value)) {
                return value;
            }
            return (trim(value) === '') ? value : trim(value);
        }
    },
};

export default all;