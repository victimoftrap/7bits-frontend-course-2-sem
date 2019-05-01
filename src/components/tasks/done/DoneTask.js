import React from 'react';
import PropTypes from 'prop-types';

import Task from "../base/Task";

/**
 * Component for task on Todo page
 */
export default class TodoTask extends React.Component {
    render() {
        const {id, title, onClickDeleteTask} = this.props;

        return (
            <Task
                leftButtonClassName={"done-button"}
                taskId={id}
                taskTitle={title}
                onClickChangeTaskStatus={() => {}}
                onClickDeleteTask={onClickDeleteTask}
            />
        );
    };
};

Task.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,

    onClickDeleteTask: PropTypes.func
};