import mobileValidation from '../../src/js/validations/mobile';
import {validate} from '../validationUtil'

describe('mobile validation', () => {
  validate(mobileValidation, 'mobile.change.customFormat', [
    { validation: true, testCase: '' },
    { validation: true, testCase: ' ()+' },
    { validation: true, testCase: ' ()+ 0123456789' },
    { validation: true, testCase: ' ()+ 012345678' },
    { validation: true, testCase: ' ()+ 0' },
    { validation: true, testCase: ' ()+ 61000000000' },
    { validation: true, testCase: ' ()+ 61' },
    { validation: true, testCase: ' ()+ 1111' },
    { validation: true, testCase: ' ()+ 111111111111111111111111111111111' },
    { validation: false, testCase: '#' },
    { validation: false, testCase: ' ()+ 01234567890' },
    { validation: false, testCase: '0#' },
    { validation: false, testCase: ' ()+ 610000000000' },
    { validation: false, testCase: '61#' },
  ]);

  let blurValidCases = [
    { validation: true, testCase: ' ()+0400000000' },
    { validation: true, testCase: ' ()+0500000000' },
    { validation: true, testCase: ' ()+61400000000' },
    { validation: true, testCase: ' ()+61500000000' },
    { validation: true, testCase: 61500000000 },
  ];

  let blurInvalidCases = [
    { validation: false, testCase: ' ' },
    { validation: false, testCase: '#' },
    { validation: false, testCase: ' ()+ 01234567890' },
    { validation: false, testCase: '0#' },
    { validation: false, testCase: ' ()+ 610000000000' },
    { validation: false, testCase: '61#' },
    { validation: false, testCase: ' ()+' },
    { validation: false, testCase: ' ()+05510000000' },
    { validation: false, testCase: ' ()+055100000' },
    { validation: false, testCase: ' ()+0550000000' },
    { validation: false, testCase: ' ()+04000000000' },
    { validation: false, testCase: ' ()+05000000000' },
    { validation: false, testCase: ' ()+040000000' },
    { validation: false, testCase: ' ()+050000000' },
    { validation: false, testCase: ' ()+61550' },
    { validation: false, testCase: ' ()+615500000000000' },
    { validation: false, testCase: ' ()+6155100000000000' },
    { validation: false, testCase: ' ()+61200000000' },
    { validation: false, testCase: ' ()+614000000000' },
    { validation: false, testCase: ' ()+615000000000' },
    { validation: false, testCase: ' ()+6140000000' },
    { validation: false, testCase: ' ()+6150000000' },
    { validation: false, testCase: ' ()+1234567890' },
    { validation: false, testCase: ' ()+6200000000' },
    { validation: false, testCase: ' ()+0200000000' },
    { validation: false, testCase: ' ()+61200000000' },
    { validation: false, testCase: 6200000000 },
    { validation: null, testCase: undefined },
    { validation: null, testCase: '' },
  ];

  validate(mobileValidation, 'mobile.blur.customFormat', []
    .concat(blurValidCases)
    .concat(blurInvalidCases)
  );

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