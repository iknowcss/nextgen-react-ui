import React, {Component} from 'react/addons';

import InputSelect from '../component/inputselect';

export default class Default extends Component {

  render() {
    return (
      <InputSelect
        placeholder="Select"
        tip="Required"
        name="phone"
      />
    );
  }

}