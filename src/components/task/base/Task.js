import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import ProgressButton from "../../buttons/progress/ProgressButton";
import ToolButton from "../../buttons/tool/ToolButton";

/**
 * Base component for task
 */
export default class Task extends React.Component {
    /**
     * Function that handles mouse click on button
     */
    onClick = () => {
        console.log(this.props.taskId);
    };

    render() {
        const {taskId, taskTitle, leftButtonClassName, editButton, onClickChangeTaskStatus, onClickDeleteTask} = this.props;

        return (
            <article className="task">
                <ProgressButton
                    id={taskId}
                    className={leftButtonClassName}
                    onClick={onClickChangeTaskStatus}
                />

                <h3 className={"task__title"}>{taskTitle}</h3>

                <div className={"task__tools"}>
                    {editButton}
                    <ToolButton
                        id={taskId}
                        className={"delete"}
                        onClick={onClickDeleteTask}
                    />
                </div>
            </article>
        );
    };
};

Task.propTypes = {
    taskId: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    leftButtonClassName: PropTypes.string.isRequired,
    editButton: PropTypes.element,

    onClickChangeTaskStatus: PropTypes.func,
    onClickDeleteTask: PropTypes.func
};