import React from "react";
import PropTypes from 'prop-types';

import './style.css';

export default class ProgressButton extends React.Component {
    clickHandler = () => {
        console.log(this.props.id);
    };

    render() {
        const {className, onClick} = this.props;

        return (
            <button
                className={`form__create ${className}`}
                onClick={onClick}
            >Create
            </button>
        );
    };
};

ProgressButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

ProgressButton.defaultProps = {
    className: ''
};