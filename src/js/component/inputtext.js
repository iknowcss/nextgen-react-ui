import React, {Component, PropTypes} from 'react/addons';
import classnames from 'classnames';

export default class InputText extends Component {
    renderInput() {
        let alignmentClass;
        if (this.props.textAlignment) {
            alignmentClass = `align-${this.props.textAlignment}`;
        }
        let className = classnames('text-input', alignmentClass);

        let type = 'text';
        if (!this.props.symbol && this.props.inputType) {
            type = this.props.inputType;
        }

        return (
            <input
                autoComplete="off"
                type={type}
                className={className}
                id={this.props.elementId}
                name={this.props.name}
                placeholder={this.props.placeholder}
                maxLength={this.props.limitLength}
                aria-describedby={this.props.describe}
            />
        );
    }

    render() {
        /*{{#if symbol}}

          <span class="input-wrap"
            {{#if symbol '===' '$'}}data-symbol="&#36;"{{else}}
            {{#if symbol '===' '%'}}data-symbol="&#37;"{{else}}
            {{#if symbol '===' 'units'}}data-symbol="units"{{/if}}{{/if}}{{/if}}
          >
            <input
              id="{{elementId}}"
              autocomplete="off"
              placeholder="{{placeholder}}"
              name="{{name}}"
              type="text"
              class="text-input
                {{#if symbol '===' '%'}}col-4{{/if}}
                {{#if symbol '===' 'units'}}col-6{{/if}}"
              {{#if limit_length}}maxlength="{{limit_length}}"{{/if}}
              {{#if describe}}aria-describedby="{{describe}}"{{/if}}
            />
          </span>

          {{/if}}*/

        const input = this.renderInput();
        if (this.props.symbol) {
            return <span>{input}</span>
        }
        return input;
    }
}


InputText.propTypes = {
    elementId: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    inputType: PropTypes.string,
    limitLength: PropTypes.number
};

InputText.defaultValues = {
};


