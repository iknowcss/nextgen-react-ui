import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';

import InputCheckbox from '../../../src/js/component/inputcheckbox';

describe.only('inputcheckbox Component', () => {
    let element;
    let span;

    it('should have the className "inputcheckbox"', () => {
        renderWithProps();
        expect(span.props.className).to.eq('inputcheckbox');
    });

    it('should include additional class names', () => {
        renderWithProps({
            style: 'foo bar'
        });
        expect(span.props.className).to.eq('inputcheckbox foo bar');
    });

    function renderWithProps(props) {
        element = TestUtils.renderIntoDocument(<InputCheckbox {...props}/>);
        span = TestUtils.findRenderedDOMComponentWithTag(element, 'span');
    }
});
