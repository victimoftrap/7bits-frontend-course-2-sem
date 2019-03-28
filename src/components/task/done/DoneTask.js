import React from 'react';
import PropTypes from 'prop-types';

import Task from "../base/Task";

export default class TodoTask extends React.Component {
    render() {
        const {id, title} = this.props;

        return (
            <Task
                leftButtonClassName={"done-button"}
                taskId={id}
                taskTitle={title}
            />
        );
    };
};

Task.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string
};