import React from 'react';
import PropTypes from 'prop-types';

import Task from "../base/Task";
import ToolButton from "../../buttons/tool/ToolButton";

export default class TodoTask extends React.Component {
    onClick = () => {
        console.log(this.props.id);
    };

    render() {
        const {id, title} = this.props;

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
            />
        );
    };
};

Task.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    leftButtonClassName: PropTypes.element
};