import React, {Component, PropTypes} from 'react/addons';

class FormInputLabel extends Component {

  render() {
    if (!this.props.label) return null;

    return (
      <label className="label">
        {this.props.label}
        <span className="label-optional">
          {this.props.tip}
        </span>
      </label>
    );
  }

}

FormInputLabel.propTypes = {
  label: PropTypes.string,
  tip: PropTypes.string
};