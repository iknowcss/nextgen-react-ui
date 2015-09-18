import mobileValidation from '../../src/js/validations/mobile';
import {validate} from '../validationUtil'

describe('mobile validation', () => {
  validate.only(mobileValidation, 'mobile.change.customFormat', [
    { validation: true, testCase: '' }
  ]);

  // let telephoneBlurValidCases = [
  //   { validation: true, testCase: ' ()+0551000000' },
  //   { validation: true, testCase: ' ()+61' },
  //   { validation: true, testCase: ' ()+6155' },
  //   { validation: true, testCase: ' ()+61551' },
  //   { validation: true, testCase: ' ()+615510000000000' },
  //   { validation: true, testCase: ' ()+1' },
  //   { validation: true, testCase: ' ()+123456789012345' },
  // ];

  // let telephoneBlurInvalidCases = [
  //   { validation: false, testCase: ' ' },
  //   { validation: false, testCase: '#' },
  //   { validation: false, testCase: ' ()+ 01234567890' },
  //   { validation: false, testCase: '0#' },
  //   { validation: false, testCase: ' ()+ 1234567890123456' },
  //   { validation: false, testCase: '1#' },
  //   { validation: false, testCase: ' ()+' },
  //   { validation: false, testCase: ' ()+05510000000' },
  //   { validation: false, testCase: ' ()+055100000' },
  //   { validation: false, testCase: ' ()+0550000000' },
  //   { validation: false, testCase: ' ()+61550' },
  //   { validation: false, testCase: ' ()+615500000000000' },
  //   { validation: false, testCase: ' ()+6155100000000000' },
  //   { validation: false, testCase: ' ()+1234567890123456' },
  //   { validation: null, testCase: undefined },
  //   { validation: null, testCase: '' },
  // ];

  // validate(telephoneValidation, 'telephone.blur.customFormat', []
  //   .concat(telephoneBlurValidCases)
  //   .concat(telephoneBlurInvalidCases)
  // );

  // validate(telephoneValidation, 'telephone.convertForModel', [
  //   { testCase: ' 1(2)3+4)5(6 7++89  ', formatResult: '123456789' }
  // ].concat(telephoneBlurInvalidCases.map(test => (
  //   { testCase: test.testCase, formatResult: test.testCase }
  // ))));

  // validate(telephoneValidation, 'telephone.convertForView', []
  //   .concat(telephoneBlurValidCases.map(test => (
  //     { testCase: test.testCase, formatResult: `formatTelephone(${test.testCase})` }
  //   )))
  //   .concat(telephoneBlurInvalidCases.map(test => (
  //     { testCase: test.testCase, formatResult: test.testCase }
  //   ))
  // ));

});