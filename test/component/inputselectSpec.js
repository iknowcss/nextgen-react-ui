import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';

import InputSelect from '../../src/js/component/inputselect';

describe('inputselect Component', () => {
  let element;

  before(() => {
    element = TestUtils.renderIntoDocument(
      <InputSelect
        name="testname"
      />
    );
  });

  it('renders', () => {
    let select = TestUtils.findRenderedDOMComponentWithTag(element, 'select');
    expect(select.props.name).to.be('');
  });
});
