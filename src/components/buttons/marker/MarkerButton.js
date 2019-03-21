import React from "react";
import PropTypes from 'prop-types';

export default class MarkerButton extends React.Component {
    clickHandler = (event) => {
        event.preventDefault();
        console.log(this.props.id);
    };

    render() {
        const { id, className, onClick } = this.props;

        return (
            <button
                className={`task__mark ${className}`}
                onClick={onClick}
            />
        );
    };
};

MarkerButton.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

MarkerButton.defaultProps = {
    id: '',
    className: ''
};