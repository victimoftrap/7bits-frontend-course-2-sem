import React from "react";
import PropTypes from 'prop-types';

export default class ToolButton extends React.Component {
    clickHandler = (event) => {
        event.preventDefault();
        console.log(this.props.id);
    };

    render() {
        const { id, className } = this.props;

        return (
            <button
                className={`task__${className} ${className}`}
                onClick={this.clickHandler}
            />
        );
    };
};

ToolButton.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};

ToolButton.defaultProps = {
    id: '',
    className: '',
};