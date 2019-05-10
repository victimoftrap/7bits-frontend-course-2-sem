import React from "react";
import PropTypes from 'prop-types';

import './style.css';

/**
 * Button component for making new status to tasks
 */
export default class ProgressButton extends React.Component {
    render() {
        const {className, onClick} = this.props;

        return (
            <button
                className={`task__progress ${className}`}
                onClick={onClick}
            />
        );
    }
}

ProgressButton.propTypes = {
    id:        PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick:   PropTypes.func.isRequired
};

ProgressButton.defaultProps = {
    id: '',
    className: ''
};