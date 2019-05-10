import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';

import './style.css';
import Button from "../baseButton/Button";

/**
 * Button component for creating new tasks
 */
export default class CreateTaskButton extends React.Component {
    render() {
        const {className, type, disabled} = this.props;

        return (
            <Button
                className={`form__create ${className}`}
                type={type}
                disabled={disabled}
                value={I18n.t('layouts.base.pages.todo.create-task.title')}
            />
        );
    }
}

CreateTaskButton.propTypes = {
    className: PropTypes.string,
    type:      PropTypes.string,
    disabled:  PropTypes.bool
};

CreateTaskButton.defaultProps = {
    className: "",
    type: "submit",
    disabled: false
};