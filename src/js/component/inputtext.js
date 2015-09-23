import React, {Component, PropTypes} from 'react/addons';
import classnames from 'classnames';

export default class InputText extends Component {

    render() {
        return (
            <input/>
        );
        /*
         {{#if symbol}}
         <span class="input-wrap" {{#if symbol '===' '$'}}data-symbol="&#36;"{{else}}{{#if symbol '===' '%'}}data-symbol="&#37;"{{else}}{{#if symbol '===' 'units'}}data-symbol="units"{{/if}}{{/if}}{{/if}}>
         <input id="{{elementId}}" class="text-input {{#if symbol '===' '%'}}col-4{{/if}}{{#if symbol '===' 'units'}}col-6{{/if}}" name="{{name}}" type="text" {{#if limit_length}}maxlength="{{limit_length}}"{{/if}} autocomplete="off" placeholder="{{placeholder}}" {{#if describe}}aria-describedby="{{describe}}"{{/if}} />
         </span>
         {{else}}
         <input id="{{elementId}}" class="text-input{{#if text_alignment}} align-{{text_alignment}}{{/if}}" name="{{name}}" {{#if input_type}}type="{{input_type}}"
         {{else}}type="text"{{/if}}autocomplete="off" placeholder="{{placeholder}}" {{#if limit_length}}maxlength="{{limit_length}}"{{/if}} {{#if describe}}aria-describedby="{{describe}}"{{/if}} />
         {{/if}}

         */
    }

}

InputText.propTypes = {
};

InputText.defaultValues = {
};


