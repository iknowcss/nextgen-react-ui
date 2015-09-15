import React, {Component} from 'react/addons';

import InputSelect from '../component/inputselect';

export default class Default extends Component {

  render() {
    return (
      <InputSelect
        name="phone"
        placeholder="Select"
        options={[
          { value: 'A', label: 'Alpha' },
          { value: 'B', label: 'Bravo' },
          { value: 'C', label: 'Charlie' },
          { value: 'D', label: 'Delta' },
        ]}
      />
    );
  }

}