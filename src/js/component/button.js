import React, {Component, PropTypes} from 'react/addons';
import classnames from 'classnames';

export default class Button extends Component {

    renderA() {
        return (
            <a></a>
        );
    }

    renderButton() {
        return (
            <button></button>
        );
    }

    render() {
        if (this.props.href) {
            return this.renderA();
        } else {
            return this.renderButton();
        }
    }

}

Button.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    align: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    describe: PropTypes.string
};