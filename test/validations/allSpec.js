import all from '../../src/js/validations/all';
import get from 'lodash/object/get';

function xvalidate() {}

function validate(path, tests, isOnly) {
  const sut = get(all, path);
  const desc = isOnly ? describe.only : describe;

  desc(path, () => {
    (tests || []).forEach(test => {
      if (test.hasOwnProperty('validation')) {
        let expected = test.validation;
        it(`"${test.testCase}" validation result "${expected}"`, () => {
          expect(sut(test.testCase)).to.eq(expected);
        });
      }
      if (test.hasOwnProperty('formatResult')) {
        let expected = test.formatResult;
        it(`"${test.testCase}" to be formatted as "${expected}"`, () => {
          expect(sut(test.testCase)).to.eq(expected);
        });
      }
    });
  });
}

validate.only = function (path, tests) {
  return validate(path, tests, true);
};

describe('validation', () => {
  validate('telephone.change.customFormat', [
    { validation: true, testCase: '' },
    { validation: true, testCase: ' ()+' },
    { validation: true, testCase: ' ()+ 0123456789' },
    { validation: true, testCase: ' ()+ 012345678' },
    { validation: true, testCase: ' ()+ 0' },
    { validation: true, testCase: ' ()+ 123456789012345' },
    { validation: true, testCase: ' ()+ 1' },
    { validation: false, testCase: '#' },
    { validation: false, testCase: ' ()+ 01234567890' },
    { validation: false, testCase: '0#' },
    { validation: false, testCase: ' ()+ 1234567890123456' },
    { validation: false, testCase: '1#' },
  ]);

  let telephoneBlurInvalidCases = [
    { validation: false, testCase: ' ' },
    { validation: false, testCase: '#' },
    { validation: false, testCase: ' ()+ 01234567890' },
    { validation: false, testCase: '0#' },
    { validation: false, testCase: ' ()+ 1234567890123456' },
    { validation: false, testCase: '1#' },
    { validation: false, testCase: ' ()+' },
    { validation: false, testCase: ' ()+05510000000' },
    { validation: false, testCase: ' ()+055100000' },
    { validation: false, testCase: ' ()+0550000000' },
    { validation: false, testCase: ' ()+61550' },
    { validation: false, testCase: ' ()+615500000000000' },
    { validation: false, testCase: ' ()+6155100000000000' },
    { validation: false, testCase: ' ()+1234567890123456' },
  ];

  validate('telephone.blur.customFormat', [
    { validation: true, testCase: ' ()+0551000000' },
    { validation: true, testCase: ' ()+61' },
    { validation: true, testCase: ' ()+6155' },
    { validation: true, testCase: ' ()+61551' },
    { validation: true, testCase: ' ()+615510000000000' },
    { validation: true, testCase: ' ()+1' },
    { validation: true, testCase: ' ()+123456789012345' },
    { validation: null, testCase: undefined },
    { validation: null, testCase: '' },
  ].concat(telephoneBlurInvalidCases));

  validate.only('telephone.convertForModel', [
    { testCase: ' 1(2)3+4)5(6 7++89  ', formatResult: '123456789' }
  ].concat(telephoneBlurInvalidCases.map(test => (
    { testCase: test.testCase, formatResult: test.testCase }
  ))));

});