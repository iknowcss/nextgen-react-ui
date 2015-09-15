import React, {Component, PropTypes} from 'react/addons';

import FormInputLabel from './forminputlabel';
import InputSelect from './inputselect';

export default class FormInputSelect extends Component {

  render() {
    return (
      <div className="validation-container">
        <div className="form-element">
          <FormInputLabel {...this.props}/>
          <InputSelect {...this.props}/>
        </div>

        {/*
        {{#if error_messages}}
          <div className="error" style="display:none">
            {{#each error_messages}}
              {{#if @key '===' 'custom'}}
                <span className="error-custom">
                  <span className="error-custom-error" id="{{../../errorId}}-custom-0" tabindex="-1">{{./this}}</span>
                  {{#each this}}
                    <span id="{{../../../errorId}}-{{format @key "underscoretodash"}}" className="error-{{format @key "underscoretodash"}}" tabindex="-1">{{./this}}</span>
                  {{/each}}
                </span>
              {{else}}
                <span id="{{../../errorId}}-{{format @key "underscoretodash"}}" className="error-{{format @key "underscoretodash"}}" tabindex="-1">{{./this}}</span>
              {{/if}}
            {{/each}}
          </div>
        {{/if}}
        */}

      </div>

    );
  }

}

FormInputSelect.propTypes = {
  label: PropTypes.string,
  tip: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  describe: PropTypes.string,
  errorMessages: PropTypes.object,
  options: PropTypes.array
};