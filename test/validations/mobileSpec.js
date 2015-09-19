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

  validate(mobileValidation, 'mobile.convertForModel', [
    { testCase: ' 0(4)0+1)5(6 7++890  ', formatResult: '0401567890' },
    { testCase: ' 0(5)0+1)5(6 7++890  ', formatResult: '0501567890' },
    { testCase: ' 61(4)0+1)5(6 7++890  ', formatResult: '0401567890' },
    { testCase: ' 61(5)0+1)5(6 7++890  ', formatResult: '0501567890' },
  ].concat(blurInvalidCases.map(test => (
    { testCase: test.testCase, formatResult: test.testCase }
  ))));

  validate(mobileValidation, 'mobile.convertForView', []
    .concat(blurValidCases.map(test => (
      { testCase: test.testCase, formatResult: `formatTelephone(${test.testCase})` }
    )))
    .concat(blurInvalidCases.map(test => (
      { testCase: test.testCase, formatResult: test.testCase }
    ))) 
  ); 

});