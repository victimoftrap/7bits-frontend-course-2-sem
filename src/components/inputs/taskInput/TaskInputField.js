import React from "react";
import PropTypes from "prop-types";

import './style.css';

/**
 * Component for user inputs taskInput
 */
export default class TaskInputField extends React.Component{
    render() {
        const {value, type, name, placeholder, onChange} = this.props;

        return (
            <React.Fragment>
                <input
                    className={'form__new-task'}
                    value={value}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                >
                </input>
            </React.Fragment>);
    }
}

TaskInputField.propTypes = {
    value:       PropTypes.string,
    type:        PropTypes.string,
    name:        PropTypes.string,
    placeholder: PropTypes.string,
    onChange:    PropTypes.func
};

TaskInputField.defaultProps = {
    value: '',
    type: 'text',
    name: '',
    placeholder: 'Your text here',
    onChange: () => {}
};