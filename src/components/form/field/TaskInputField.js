import React from "react";
import PropTypes from "prop-types";

import './style.css';

export default class TaskInputField extends React.Component{
    render() {
        const {placeholder, onChange} = this.props;

        return (
            <React.Fragment>
                <input
                    className={'form__new-task'}
                    placeholder={placeholder}
                    onChange={onChange}
                >
                </input>
            </React.Fragment>);
    }
}

TaskInputField.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

TaskInputField.defaultProps = {
    placeholder: 'Your text here',
    onChange: () => {}
};