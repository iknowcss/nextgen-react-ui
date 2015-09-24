import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';
import MockComponent from '../../util/mockComponent';

const FormInputLabel = MockComponent.create();
const InputSelect = MockComponent.create();
const FormInputSelect = require('inject!../../../src/js/component/forminputselect')({
  './forminputlabel': FormInputLabel,
  './inputselect': InputSelect
});

describe('forminputselect Component', () => {
  let element;
  let formInputLabel;
  let inputSelect;

  describe('basic render', () => {
    const props = {

    };

    before(() => {
      element = TestUtils.renderIntoDocument(<FormInputSelect {...props}/>);
      formInputLabel = TestUtils.findRenderedComponentWithType(element, FormInputLabel);
      inputSelect = TestUtils.findRenderedComponentWithType(element, InputSelect);
    });

    it('passes the props to FormInputLabel', () => {

    });
  });
});
