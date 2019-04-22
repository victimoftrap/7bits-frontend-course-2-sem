import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import TodoTask from "../../components/task/todo/TodoTask";
import TaskInputField from "../../components/form/field/TaskInputField";
import CreateTaskButton from "../../components/buttons/create/CreateTaskButton";

import './style.css';

import getTaskList from "../../actions/tasksList/getTaskList";
import addNewTask from "../../actions/tasksList/addNewTask";
import updateTaskById from "../../actions/tasksList/updateTaskById";
import removeTaskById from "../../actions/tasksList/removeTaskById";

/**
 * Component-container for tasks with status "inbox". Container for main page
 */
class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };
    }

    componentDidMount() {
        this.props.getTaskList("inbox");
    }

    /**
     * Change task status handler
     * @param id - ID of a task
     */
    onClickChangeTaskStatus = (id) => {
        this.props.updateTaskById(id, {
            status: "done"
        })
            .then(
                () => this.props.getTaskList("inbox")
            );
    };
    /**
     * Delete task handler
     * @param id - ID of a task
     */
    onClickDeleteTask = (id) => {
        this.props.removeTaskById(id)
            .then(
                () => this.props.getTaskList("inbox")
            );
    };

    /**
     * Add new entered character to state
     * @param event - event of pressing on button
     */
    onChange = (event) => {
        this.setState({
                value: event.target.value
            }
        );
    };

    /**
     * Add new task, that text entered from input
     * @param event - event of submitting form
     */
    onSubmit = (event) => {
        event.preventDefault();

        this.props.addNewTask({
            text: this.state.value
        }).then(
            () => this.props.getTaskList("inbox")
        );

        this.setState({
            value: ""
        })
    };

    /**
     * Convert values from json to list of <TodoTask/> tags
     * @returns {*[]} <TodoTask/> with values from json
     */
    renderList = () => {
        return this.props.taskList.map((item) => {
            return (
                <TodoTask key={item.id}
                          id={item.id}
                          title={item.text}
                          onClickChangeTaskStatus={
                              () => this.onClickChangeTaskStatus(item.id)
                          }
                          onClickDeleteTask={
                              () => this.onClickDeleteTask(item.id)
                          }
                />
            );
        });
    };

    /**
     * Render part of page
     * @returns {*} React fragment
     */
    render() {
        return (
            <React.Fragment>
                <form className="main__form"
                      onSubmit={this.onSubmit}
                >
                    <TaskInputField
                        value={this.state.value}
                        placeholder={"Your text here"}
                        onChange={this.onChange}
                    />
                    <CreateTaskButton
                        type={"submit"}
                        disabled={this.state.value.length === 0}
                    />
                </form>
                {this.renderList()}
            </React.Fragment>
        );
    };
}

/**
 * Function for converting current state of store to props
 * @param state - state of store
 * @returns {{}}
 */
const mapStateToProps = (state) => {
    return {
        taskList: state.taskListReducer.taskList
    }
};

/**
 * Send action to store
 * @param dispatch - method for sending action
 * @returns {{}}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        getTaskList: bindActionCreators(getTaskList, dispatch),
        addNewTask: bindActionCreators(addNewTask, dispatch),
        updateTaskById: bindActionCreators(updateTaskById, dispatch),
        removeTaskById: bindActionCreators(removeTaskById, dispatch)
    }
};

/**
 * Connect component with store
 */
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
