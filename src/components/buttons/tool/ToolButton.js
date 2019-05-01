import React from "react";
import PropTypes from 'prop-types';

import './style.css';

/**
 * Button component for edition tasks
 */
export default class ToolButton extends React.Component {
    /**
     * Handle mouse click on baseButton
     */
    clickHandler = () => {
        console.log(this.props.id);
    };

    render() {
        const {className, onClick} = this.props;

        return (
            <button
                className={`task__${className} ${className}`}
                onClick={onClick}
            />
        );
    };
};

ToolButton.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

ToolButton.defaultProps = {
    id: '',
    className: ''
};