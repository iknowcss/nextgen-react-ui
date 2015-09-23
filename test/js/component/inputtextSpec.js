import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';

import InputText from '../../../src/js/component/inputtext';

describe.only('inputtext Component', () => {
    let element;
    let input;

    describe('no symbol', () => {
        before(() => {
            element = TestUtils.renderIntoDocument(
                <InputText
                    elementId="foo-element"
                    name="foo"
                    placeholder="Type some foo"
                />
            );
            input = TestUtils.findRenderedDOMComponentWithTag(element, 'input');
        });

        it('renders the input', () => {
            expect(input).not.to.be.null;
        });

        it('sets the input "autocomplete" prop to "off"', () => {
            expect(input.props.autoComplete).to.eq('off');
        });

        it('sets the input "id" prop', () => {
            expect(input.props.id).to.eq('foo-element');
        });

        it('sets the input "name" prop', () => {
            expect(input.props.name).to.eq('foo');
        });

        it('sets the input "placeholder" prop', () => {
            expect(input.props.placeholder).to.eq('Type some foo');
        });

        describe('class names', () => {
            it('renders with a classname', () => {
                renderWithPropsAndReference();
                let expectedClassNames = 'text-input'.split(' ').sort();
                let actualClassNames = input.props.className.split(' ').sort();
                expect(actualClassNames).to.eql(expectedClassNames);
            });

            it('renders with the alignment classname', () => {
                renderWithPropsAndReference({ textAlignment: 'left'});
                let expectedClassNames = 'text-input align-left'.split(' ').sort();
                let actualClassNames = input.props.className.split(' ').sort();
                expect(actualClassNames).to.eql(expectedClassNames);
            });
        });
    });

    function renderWithPropsAndReference(props) {
        element = TestUtils.renderIntoDocument(
            <InputText {...props}/>
        );
        input = TestUtils.findRenderedDOMComponentWithTag(element, 'input');
    }
});