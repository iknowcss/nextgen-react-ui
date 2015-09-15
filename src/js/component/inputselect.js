import React, {Component, PropTypes} from 'react/addons';
import classnames from 'classnames';

export default class InputSelect extends Component {

  render() {
    const className = classnames('select-box-element', this.props.name, {
      'compactexample': this.props.compact,
      'compact': this.props.compact
    });

    let placeholder;
    if (this.props.placeholder) {
      placeholder = <option>{this.props.placeholder}</option>;
    }

    let options;
    if (this.props.options) {
      options = this.props.options.map((o, i) =>
        <option value={o.value} key={i}>{o.label}</option>
      );
    }

    return (
      <div className={className}>
        <select 
          name={this.props.name}
          id={this.props.elementId}
          aria-describedby={this.props.describe}
        >
          {placeholder}
          {options}
        </select>
      </div>

    );
  }

}

InputSelect.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  describe: PropTypes.string,
  options: PropTypes.array,
  compact: PropTypes.bool,
  elementId: PropTypes.string
};

InputSelect.defaultValues = {
  compact: false,
  options: []
};