import React from 'react';
import PropTypes from 'prop-types';

import Task from "../base/Task";

/**
 * Component for task on Done page
 */
export default class DoneTask extends React.Component {
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
    }
}

DoneTask.propTypes = {
    id:                PropTypes.string.isRequired,
    title:             PropTypes.string.isRequired,
    onClickDeleteTask: PropTypes.func.isRequired
};