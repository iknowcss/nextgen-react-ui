import React, {Component, PropTypes} from 'react/addons';
import classnames from 'classnames';

export default class InputSelect extends Component {

  render() {
    const className = classnames('select-box-element', this.props.name, {
      'compactexample': this.props.compact,
      'compact': this.props.compact
    });

    return (
      <div className={className}>
        <select 
          name={this.props.name}
          id={this.props.elementId}
          aria-describedby={this.props.describe}
        >
          (placeholder ? (
            <option value="" selected="selected">{{placeholder}}</option>
          ) : null)
          
          options.map(option => 
            <option value="{o.value}">{o.label}</option>
          )

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
  compact: false
};