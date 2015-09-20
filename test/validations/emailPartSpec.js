import emailValidation from '../../src/js/validations/emailPart';
import {validate} from '../validationUtil'

describe('validation', () => {
  validate.only(emailValidation, 'email.change.customFormat', [
    { validation: true, testCase: undefined },
    { validation: true, testCase: 123 },
    { validation: true, testCase: '' },
    { validation: true, testCase: 'abc z_ABC@Z.0123-9' },
    { validation: false, testCase: 'martín@example.com' },
  ]);

  // let blurValidTests = [
  //   { validation: true, testCase: ' ()+0551000000' },
  // ];

  // let blurInvalidTests = [
  //   { validation: false, testCase: ' ' },
  // ];

  // validate(emailValidation, 'email.blur.customFormat', []
  //   .concat(blurValidTests)
  //   .concat(blurInvalidTests)
  // );

  // validate(emailValidation, 'email.convertForModel', [
  //   { testCase: ' 1(2)3+4)5(6 7++89  ', formatResult: '123456789' }
  // ].concat(blurInvalidTests.map(test => (
  //   { testCase: test.testCase, formatResult: test.testCase }
  // ))));

});