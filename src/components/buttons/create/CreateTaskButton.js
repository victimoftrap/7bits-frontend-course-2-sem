import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class ProgressButton extends React.Component {
    render() {
        const {className, type, disabled} = this.props;

        return (
            <button
                className={`form__create ${className}`}
                type={type}
                disabled={disabled}
            >Create
            </button>
        );
    };
};

ProgressButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool
};

ProgressButton.defaultProps = {
    className: "",
    type: "submit",
    disabled: false
};