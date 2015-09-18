import get from 'lodash/object/get';

export function validate(validator, path, tests, isOnly) {
  const sut = get(validator, path);
  const desc = isOnly ? describe.only : describe;

  desc(path, () => {
    if (typeof sut !== 'function') {
      before(() => {
        console.error(`couldn't find validator ${path}`);
      });

      it('validator exists', () => {
        expect(sut).to.be.instanceOf(Function);
      });
      return;
    }

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

validate.only = function (validator, path, tests) {
  return validate(validator, path, tests, true);
};