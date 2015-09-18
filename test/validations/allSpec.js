import all from '../../src/js/validations/all';
import get from 'lodash/object/get';

function xvalidate() {}

function validate(path, validCases, invalidCases, nullCases, isOnly) {
  const sut = get(all, path);
  const desc = isOnly ? describe.only : describe;

  desc(path, () => {
    (validCases || []).forEach(testCase => {
      it(`"${testCase}" is valid`, () => {
        expect(sut(testCase)).to.be.true;
      });
    });

    (invalidCases || []).forEach(testCase => {
      it(`"${testCase}" is invalid`, () => {
        expect(sut(testCase)).to.be.false;
      });
    });

    (nullCases || []).forEach(testCase => {
      it(`"${testCase}" is null`, () => {
        expect(sut(testCase)).to.be.null;
      });
    });
  });
}

validate.only = function (path, validCases, invalidCases, nullCases) {
  return validate(path, validCases, invalidCases, nullCases, true);
};

describe.only('validation', () => {
    validate('telephone.change.customFormat', [
      '',
      ' ()+',
      ' ()+ 0123456789',
      ' ()+ 012345678',
      ' ()+ 0',
      ' ()+ 123456789012345',
      ' ()+ 1',
    ], [
      '#',
      ' ()+ 01234567890',
      '0#',
      ' ()+ 1234567890123456',
      '1#',
    ]);

    validate('telephone.blur.customFormat', [
      ' ()+0551000000',
      ' ()+61',
      ' ()+6155',
      ' ()+61551',
      ' ()+615510000000000',
      ' ()+1',
      ' ()+123456789012345',
    ], [,
      ' ',
      '#',
      ' ()+ 01234567890',
      '0#',
      ' ()+ 1234567890123456',
      '1#',
      ' ()+',
      ' ()+05510000000',
      ' ()+055100000',
      ' ()+0550000000',
      ' ()+61550',
      ' ()+615500000000000',
      ' ()+6155100000000000',
      ' ()+1234567890123456',
    ], [
      undefined,
      '',
    ]);
});