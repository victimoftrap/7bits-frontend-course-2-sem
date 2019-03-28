import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import ProgressButton from "../../buttons/progress/ProgressButton";
import ToolButton from "../../buttons/tool/ToolButton";

export default class Task extends React.Component {
    onClick = () => {
        console.log(this.props.taskId);
    };

    render() {
        const {taskId, taskTitle, leftButtonClassName, editButton} = this.props;

        return (
            <article className="task">
                <ProgressButton
                    id={taskId}
                    className={leftButtonClassName}
                    onClick={this.onClick}
                />

                <h3 className={"task__title"}>{taskTitle}</h3>

                <div className={"task__tools"}>
                    {editButton}
                    <ToolButton
                        id={taskId}
                        className={"delete"}
                        onClick={this.onClick}
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
    editButton: PropTypes.element
};