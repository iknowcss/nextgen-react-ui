import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';

import InputSelect from '../../src/js/component/inputselect';

describe('inputselect Component', () => {
  let element;
  let select;

  describe('container div class names', () => {
    let container;

    describe('non-compact', () => {
      before(() => {
        element = TestUtils.renderIntoDocument(<InputSelect name="testname"/>);
        container = TestUtils.findRenderedDOMComponentWithTag(element, 'div');
      });

      it('has the proper class names', () => {
        let expectedClassNames = 'select-box-element testname'.split(' ').sort();
        let actualClassNames = container.props.className.split(' ').sort();
        expect(actualClassNames).to.eql(expectedClassNames);
      });
    });

    describe('compact', () => {
      before(() => {
        element = TestUtils.renderIntoDocument(<InputSelect name="testname" compact={true}/>);
        container = TestUtils.findRenderedDOMComponentWithTag(element, 'div');
      });

      it('has the proper class names', () => {
        let expectedClassNames = 'select-box-element testname compactexample compact'.split(' ').sort();
        let actualClassNames = container.props.className.split(' ').sort();
        expect(actualClassNames).to.eql(expectedClassNames);
      });
    });
  });

  describe('select attributes', () => {
    before(() => {
      element = TestUtils.renderIntoDocument(
        <InputSelect
          name="testname"
          elementId="testelement"
          describe="ariadescribe"
        />
      );
      select = TestUtils.findRenderedDOMComponentWithTag(element, 'select');
    });

    it('sets the "name" prop', () => {
      expect(select.props.name).to.eq('testname');
    });

    it('sets the "id" prop', () => {
      expect(select.props.id).to.eq('testelement');
    });

    it('sets the "aria" prop', () => {
      expect(select.props['aria-describedby']).to.eq('ariadescribe');
    });
  });

  describe('options', () => {
    const defaultOptions = [
      { value: 'A', label: 'Alpha' },
      { value: 'B', label: 'Bravo' },
      { value: 'C', label: 'Charlie' }
    ];

    let options;

    it('renders options without a placeholder', () => {
      options = buildOptionsFor(<InputSelect options={defaultOptions}/>);
      expect(options).to.eql([
        { value: 'A', text: 'Alpha' },
        { value: 'B', text: 'Bravo' },
        { value: 'C', text: 'Charlie' }
      ]);
    });

    it('renders options with a placeholder', () => {
      options = buildOptionsFor(<InputSelect
        options={defaultOptions}
        placeholder="Select"
      />);
      expect(options).to.eql([
        { value: undefined, text: 'Select' },
        { value: 'A', text: 'Alpha' },
        { value: 'B', text: 'Bravo' },
        { value: 'C', text: 'Charlie' }
      ]);
    });

    it('renders empty options with a placeholder', () => {
      options = buildOptionsFor(<InputSelect placeholder="Select"/>);
      console.log(options);
      expect(options).to.eql([
        { value: undefined, text: 'Select' }
      ]);
    });

    function buildOptionsFor(jsx) {
      let element = TestUtils.renderIntoDocument(jsx);
      let optionElements = TestUtils.scryRenderedDOMComponentsWithTag(element, 'option');
      return optionElements.map(o => {
        return {
          value: o.props.value,
          text: React.findDOMNode(o).textContent
        };
      });
    }
  });
});
