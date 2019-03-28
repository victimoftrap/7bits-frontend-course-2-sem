import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

/**
 * Button component for creating new task
 */
export default class CreateTaskButton extends React.Component {
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

CreateTaskButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool
};

CreateTaskButton.defaultProps = {
    className: "",
    type: "submit",
    disabled: false
};