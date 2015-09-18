import all from '../../src/js/validations/all';

describe('validations', () => {
  describe.only('telephone', () => {
    const validCases = [
      '',
      ' ()+',
      ' ()+ 0123456789',
      ' ()+ 012345678',
      ' ()+ 0',
      ' ()+ 123456789012345',
      ' ()+ 1',
    ];

    const invalidCases = [
      '#',
      ' ()+ 01234567890',
      '0#',
      ' ()+ 1234567890123456',
      '1#',
    ];

    validCases.forEach(testCase => {
      it(`"${testCase}" is VALID`, () => {
        expect(all.telephone.change.customFormat(testCase)).to.be.true;
      });
    });

    invalidCases.forEach(testCase => {
      it(`"${testCase}" is INVALID`, () => {
        expect(all.telephone.change.customFormat(testCase)).to.be.false;
      });
    });
  });
});