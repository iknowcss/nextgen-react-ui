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


