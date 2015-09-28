import React, {Component, PropTypes} from 'react/addons';
import classnames from 'classnames';

export default class Button extends Component {

    renderIconContainer() {
        let iconclassName = classnames('icon', this.props.image);
        return (
            <span className="icon-container inverted">
                <span className={iconclassName} aria-hidden="true"></span>
            </span>
        );
    }

    renderLabelContent() {
        return (
            <span className="label-content">{this.props.label}</span>
        );
    }

    renderImageStyle() {
        let elems = [];
        if (this.props.align === 'left') {
            if (this.props.label) {
                elems.push(this.renderLabelContent());
            }
            elems.push(this.renderIconContainer());
        } else {
            elems.push(this.renderIconContainer());
            if (this.props.label) {
                elems.push(this.renderLabelContent());
            }
        }
        return (
            {elems}
        );
    }

    renderTertiaryStye() {
        //TODO:
    }

    renderSpanButtonInner() {
        let style;
        if (this.props.style === 'image') {
            style = this.renderImageStyle();
        } else if (this.props.style === 'tertiary') {
            style = this.renderTertiaryStye();
        }
        return (
            <span className="button-inner">
                {style}
            </span>
        );
    }

    renderA() {
        let attrs = {}
        attrs['href'] = this.props.href;
        if (this.props.target) {
            attrs['target'] = this.props.target;
        }

        let alignmentClass;
        if (this.props.align === 'left') {
            alignmentClass = 'btn-right-aligned';
        }
        let className = classnames(alignmentClass, this.props.className);
        attrs['className'] = className;

        if (this.props.title) {
            attrs['title'] = this.props.title;
        }
        if (this.props.describe) {
            attrs['aria-describedby'] = this.props.describe;
        }
        return (
            <a {...attrs}>
                {this.renderSpanButtonInner()}
            </a>
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
    describe: PropTypes.string,
    style: PropTypes.string,
    label: PropTypes.string
};