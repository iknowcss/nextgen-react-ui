import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';

import InputText from '../../../src/js/component/inputtext';

describe('inputtext Component', () => {
    let element;
    let span;
    let input;

    const allProps = {
        elementId: 'foo-element',
        name: 'foo',
        placeholder: 'Type some foo',
        limitLength: 20,
        describe: 'foo-reference',
        inputType: 'password'
    };

    describe('symbol', () => {
        describe('with all props', () => {
            before(() => {
                element = TestUtils.renderIntoDocument(
                    <InputText symbol="$" {...allProps}/>
                );
                span = TestUtils.findRenderedDOMComponentWithTag(element, 'span');
                input = TestUtils.findRenderedDOMComponentWithTag(span, 'input');
            });

            it('renders the input', () => {
                expect(input).not.to.be.null;
            });

            it('sets the input "autocomplete" prop to "off"', () => {
                expect(input.props.autoComplete).to.eq('off');
            });

            it('sets the "type" prop', () => {
                expect(input.props.type).to.eq('text');
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

            it('sets the input "maxLength" prop', () => {
                expect(input.props.maxLength).to.eq(20);
            });

            it('sets the input "aria-describedby" prop', () => {
                expect(input.props['aria-describedby']).to.eq('foo-reference');
            });
        });

        describe('no props', () => {
            before(() => {
                element = TestUtils.renderIntoDocument(
                    <InputText symbol="$"/>
                );
                input = TestUtils.findRenderedDOMComponentWithTag(element, 'input');
            });

            it('sets the input "autocomplete" prop to "off"', () => {
                expect(input.props.autoComplete).to.eq('off');
            });

            it('sets the "type" prop', () => {
                expect(input.props.type).to.eq('text');
            });
        });
    });

    describe('no symbol', () => {
        describe('with all props', () => {
            before(() => {
                element = TestUtils.renderIntoDocument(
                    <InputText {...allProps}/>
                );
                input = TestUtils.findRenderedDOMComponentWithTag(element, 'input');
            });

            it('renders the input', () => {
                expect(input).not.to.be.null;
            });

            it('sets the input "autocomplete" prop to "off"', () => {
                expect(input.props.autoComplete).to.eq('off');
            });

            it('sets the "type" prop', () => {
                expect(input.props.type).to.eq('password');
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

            it('sets the input "maxLength" prop', () => {
                expect(input.props.maxLength).to.eq(20);
            });

            it('sets the input "aria-describedby" prop', () => {
                expect(input.props['aria-describedby']).to.eq('foo-reference');
            });
        });

        describe('no props', () => {
            before(() => {
                element = TestUtils.renderIntoDocument(
                    <InputText/>
                );
                input = TestUtils.findRenderedDOMComponentWithTag(element, 'input');
            });

            it('sets the input "autocomplete" prop to "off"', () => {
                expect(input.props.autoComplete).to.eq('off');
            });

            it('sets the "type" prop', () => {
                expect(input.props.type).to.eq('text');
            });

            it('leaves other props unspecified', () => {
                expect(input.props.id).to.be.undefined;
                expect(input.props.name).to.be.undefined;
                expect(input.props.placeholder).to.be.undefined;
                expect(input.props.maxLength).to.be.undefined;
                expect(input.props['aria-describedby']).to.be.undefined;
            });
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

        function renderWithPropsAndReference(props) {
            element = TestUtils.renderIntoDocument(
                <InputText {...props}/>
            );
            input = TestUtils.findRenderedDOMComponentWithTag(element, 'input');
        }
    });
});