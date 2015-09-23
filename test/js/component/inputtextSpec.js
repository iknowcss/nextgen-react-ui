import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';

import InputText from '../../../src/js/component/inputtext';

describe.only('inputtext Component', () => {
    let element;
    let input;

    before(() => {
        element = TestUtils.renderIntoDocument(<InputText />);
        input = TestUtils.findRenderedDOMComponentWithTag(element, 'input');
    });

    it('renders the input', () => {
        expect(input).not.to.be.null;
    });

    describe('', () => {

    });
});