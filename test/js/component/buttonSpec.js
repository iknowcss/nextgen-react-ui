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
        className: 'fooClass',
        title: 'fooTitle',
        describe: 'fooDescribe',
        style: 'fooStyle',
        label: 'fooLabel',
        image: 'fooImage',
        //for button only
        type: 'fooType',
        familyName: 'fooFamilyName'
    };

    describe('href', () => {
        describe('with all props', () => {
           before(() => {
               element = TestUtils.renderIntoDocument(
                   <Button href="http://foo.com" {...allProps} />
               );
               a = TestUtils.findRenderedDOMComponentWithTag(element, 'a');
           });

           it('renders the a', () => {
               expect(a).not.to.be.null;
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