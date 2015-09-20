import emailValidation from '../../src/js/validations/emailPart';
import {validate} from '../validationUtil';
import trim from 'lodash/string/trim';

describe('validation', () => {
  validate(emailValidation, 'email.change.customFormat', [
    { validation: true, testCase: undefined },
    { validation: true, testCase: 123 },
    { validation: true, testCase: '' },
    { validation: true, testCase: 'abc z_ABC@Z.0123-9' },
    { validation: false, testCase: 'martín@example.com' },
  ]);

  let invalidEmails = [
    '  ',
    ' @example.com ',
    ' test@.com ',
    ' test@example. ',
    ' testexample.com ',
    ' test@examplecom ',
    ' test@example.c ',
    ' test@example.cooom ',
    ' test@exámple.com ',
  ];

  let validEmails = [
    ' test@example.com ',
    ' test@example.com.au ',
    ' AZaz09._%+-@AZaz09....AZaz ',
  ];

  validate(emailValidation, 'email.convertForModel', [
    { testCase: undefined, formatResult: undefined }
  ]
    .concat(validEmails.map(e => (
      { testCase: e, formatResult: trim(e) }
    )))
    .concat(invalidEmails.map(e => (
      { testCase: e, formatResult: e }
    )))
  );

});