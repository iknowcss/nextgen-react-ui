import React, {Component} from 'react/addons';

import FormInputSelect from '../component/forminputselect';

export default class Default extends Component {

  render() {
    return (
      <FormInputSelect
        label="Mobile"
        placeholder="Select"
        tip="Required"
        name="phone"
        errorMessages={{
          required: 'Mobile is required'
        }}
      />
    );
  }

}