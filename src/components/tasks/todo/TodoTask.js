import React from 'react';
import PropTypes from 'prop-types';

import Task from "../base/Task";
import ToolButton from "../../buttons/tool/ToolButton";

/**
 * Component for task on Done page
 */
export default class TodoTask extends React.Component {
    render() {
        const {id, title, onClickChangeTaskStatus, onClickDeleteTask} = this.props;

        return (
            <Task
                leftButtonClassName={"inbox-button"}
                taskId={id}
                taskTitle={title}
                editButton={
                    <ToolButton
                        id={id}
                        className={"edit"}
                        onClick={this.onClick}
                    />
                }
                onClickChangeTaskStatus={onClickChangeTaskStatus}
                onClickDeleteTask={onClickDeleteTask}
            />
        );
    }
}

TodoTask.propTypes = {
    id:                      PropTypes.string.isRequired,
    title:                   PropTypes.string.isRequired,
    leftButtonClassName:     PropTypes.element.isRequired,
    onClickChangeTaskStatus: PropTypes.func.isRequired,
    onClickDeleteTask:       PropTypes.func.isRequired
};