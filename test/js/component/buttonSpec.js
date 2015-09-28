import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';

import Button from '../../../src/js/component/button';

describe('button Component', () => {
    let element;
    let a;
    let button;

    const allProps = {
        target: 'foo-target',
        align: 'left',
        className: 'foo-class',
        title: 'fooTitle',
        describe: 'fooDescribe',
        style: 'image',
        label: 'fooLabel',
        image: 'fooImage',
        //for button only
        type: 'fooType',
        familyName: 'fooFamilyName'
    };

    function renderWithPropsAndReference(props) {
        element = TestUtils.renderIntoDocument(
            <Button href="http://foo.com" {...props}/>
        );
    }

    describe('href', () => {
        describe('with all props', () => {
            before(() => {
                renderWithPropsAndReference(allProps);
                a = TestUtils.findRenderedDOMComponentWithTag(element, 'a');
            });

            it('renders the a', () => {
                expect(a).not.to.be.null;
            });

            it('sets the "href" prop to "http://foo.com" ', () => {
                expect(a.props.href).to.eq('http://foo.com');
            });

            it('sets the "target" prop to "foo-target" ', () => {
                expect(a.props.target).to.eq('foo-target');
            });

            it('sets the "title" prop to "fooTitle" ', () => {
                expect(a.props.title).to.eq('fooTitle');
            });

            it('sets the "aria-describedby" prop to "fooDescribe" ', () => {
                expect(a.props['aria-describedby']).to.eq('fooDescribe');
            });

            it('renders span with class "button-inner"', () => {
                let span = TestUtils.findRenderedDOMComponentWithClass(a, 'button-inner');
                expect(span.props.className).to.eq('button-inner');
            });

        });

        describe('with missing props', () => {
            const someProps = {
                className: 'foo-class',
                style: 'fooStyle',
                label: 'fooLabel',
                image: 'fooImage',
                //for button only
                type: 'fooType',
                familyName: 'fooFamilyName'
            };

            before(() => {
                element = TestUtils.renderIntoDocument(
                    <Button href="http://foo.com" {...someProps} />
                );
                a = TestUtils.findRenderedDOMComponentWithTag(element, 'a');
            });

            it('leaves other props unspecified', () => {
                expect(a.props.target).to.be.undefined;
                expect(a.props.title).to.be.undefined;
                expect(a.props['aria-describedby']).to.be.undefined;
            });
        });

        describe('class name', () => {

            it('renders with a class name when wrong align', () => {
                renderWithPropsAndReference({align: 'top', className: 'foo-class'});
                a = TestUtils.findRenderedDOMComponentWithTag(element, 'a');
                let actualClassNames = a.props.className.split(' ').sort();
                let expectedClassNames = 'foo-class'.split(' ').sort();
                expect(actualClassNames).to.eql(expectedClassNames);
            });

            it('renders with a class name when no align', () => {
                renderWithPropsAndReference({className: 'foo-class'});
                a = TestUtils.findRenderedDOMComponentWithTag(element, 'a');
                let actualClassNames = a.props.className.split(' ').sort();
                let expectedClassNames = 'foo-class'.split(' ').sort();
                expect(actualClassNames).to.eql(expectedClassNames);
            });

            it('renders with the align class name', () => {
                renderWithPropsAndReference({align: 'left', className: 'foo-class'});
                a = TestUtils.findRenderedDOMComponentWithTag(element, 'a');
                let actualClassNames = a.props.className.split(' ').sort();
                let expectedClassNames = 'btn-right-aligned foo-class'.split(' ').sort();
                expect(actualClassNames).to.eql(expectedClassNames);
            });
        });

        describe('with "style" prop as', () => {

            describe('style as image', () => {
                renderWithPropsAndReference({style: 'image'});
                let spanButton = TestUtils.findRenderedDOMComponentWithClass(element, 'button-inner');

                describe('container', () => {
                    let container = TestUtils.findRenderedDOMComponentWithClass(spanButton, 'icon-container inverted');

                    it('has icon-container inverted', () => {
                        expect(spanButton.getDOMNode().children[0]).to.eq(container.getDOMNode());
                    });

                    describe('and icon', () => {
                        let icon = TestUtils.findRenderedDOMComponentWithClass(container, 'icon');

                        it('default aria-hidden to true', () => {
                            expect(icon.props['aria-hidden']).to.eq("true");
                        });

                        it('has no other classes', () => {
                            let actualClassNames = icon.props.className.split(' ').sort();
                            expect(actualClassNames).to.eql(['icon']);
                        });
                    });
                });


            });

            it('style as tertiary', () => {

            });

            it('style as undefined', () => {
                renderWithPropsAndReference({});
            });

            it('renders with "style" image and "image" prop', () => {
                renderWithPropsAndReference({style: 'image', image: 'foo'});
                let span = TestUtils.findRenderedDOMComponentWithClass(element, 'button-inner');
                let container = TestUtils.findRenderedDOMComponentWithClass(span, 'icon-container inverted');
                let icon = TestUtils.findRenderedDOMComponentWithClass(container, 'icon');
                expect(span.getDOMNode().children[0]).to.eq(container.getDOMNode());

                let actualClassNames = icon.props.className.split(' ').sort();
                let expectedClassNames = 'icon foo'.split(' ').sort();
                expect(actualClassNames).to.eql(expectedClassNames);

                expect(icon.props['aria-hidden']).to.eq("true");
            });

            it('renders with "style" image and expected order using "align" prop as "left"', () => {
                renderWithPropsAndReference({style: 'image', align: 'left', label: 'foo-label'});
                let span = TestUtils.findRenderedDOMComponentWithClass(element, 'button-inner');
                let labelContentNode = TestUtils.findRenderedDOMComponentWithClass(span, 'label-content').getDOMNode();
                let iconContainerNode = TestUtils.findRenderedDOMComponentWithClass(span, 'icon-container inverted').getDOMNode();
                expect(span.getDOMNode().children.length).to.eq(2);
                expect(span.getDOMNode().children[0]).to.eq(labelContentNode);
                expect(span.getDOMNode().children[1]).to.eq(iconContainerNode);
            });

            it('renders with style "image" and expected order using align="right"', () => {
                renderWithPropsAndReference({style: 'image', align: 'right', label: 'foo-label'});
                let span = TestUtils.findRenderedDOMComponentWithClass(element, 'button-inner');
                let labelContentNode = TestUtils.findRenderedDOMComponentWithClass(span, 'label-content').getDOMNode();
                let iconContainerNode = TestUtils.findRenderedDOMComponentWithClass(span, 'icon-container inverted').getDOMNode();
                expect(span.getDOMNode().children.length).to.eq(2);
                expect(span.getDOMNode().children[0]).to.eq(iconContainerNode);
                expect(span.getDOMNode().children[1]).to.eq(labelContentNode);

                //console.log(span.getDOMNode().children);
                //console.log(span.getDOMNode().innerHTML);
                //console.log(require('util').inspect(span.props.children, { depth: null }));
            });

        });
    });

    describe('no href', () => {
        describe('with all props', () => {
            before(() => {
                element = TestUtils.renderIntoDocument(
                    <Button {...allProps} />
                );
                button = TestUtils.findRenderedDOMComponentWithTag(element, 'button');
            });

            it('renders the button', () => {
                expect(button).not.to.be.null;
            });
        });
    });
});