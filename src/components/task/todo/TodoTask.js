import React from 'react';
import PropTypes from 'prop-types';

import Task from "../base/Task";
import ToolButton from "../../buttons/tool/ToolButton";

/**
 * Component for task on Done page
 */
export default class TodoTask extends React.Component {
    /**
     * Function that handles mouse click on button
     */
    onClick = () => {
        console.log(this.props.id);
    };

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
    };
};

Task.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    leftButtonClassName: PropTypes.element,

    onClickChangeTaskStatus: PropTypes.func,
    onClickDeleteTask: PropTypes.func
};