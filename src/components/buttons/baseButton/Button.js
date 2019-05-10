import React from "react";
import PropTypes from "prop-types";

import "./style.css";

/**
 * Component for standard button
 */
export default class Button extends React.Component {
    render() {
        const {className, type, value, disabled} = this.props;

        return (
            <button
                className={className}
                type={type}
                disabled={disabled}
            >
                {value}
            </button>
        );
    }
}

Button.defaultProps = {
    value: '',
    className: '',
    type: 'button',
    disabled: false
};

Button.propTypes = {
    className: PropTypes.string,
    type:      PropTypes.string,
    value:     PropTypes.string,
    disabled:  PropTypes.bool
};