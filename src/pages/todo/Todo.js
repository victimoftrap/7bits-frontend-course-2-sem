import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import TodoTask from "../../components/tasks/todo/TodoTask";
import TaskInputField from "../../components/inputs/taskInput/TaskInputField";
import CreateTaskButton from "../../components/buttons/create/CreateTaskButton";
import * as URLS from "../sitePageUrls";

import './style.css';

import getTaskList from "../../actions/tasks/getTaskList";
import addNewTask from "../../actions/tasks/addNewTask";
import updateTaskById from "../../actions/tasks/updateTaskById";
import removeTaskById from "../../actions/tasks/removeTaskById";
import whoami from "../../actions/user/whoami";

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
        if (!this.props.isAuthorized) {
            this.props.history.replace(URLS.SIGN_IN_PAGE);
        }

        this.props.whoami();
        this.props.getTaskList("inbox");
    }

    componentDidUpdate() {
        if (!this.props.isAuthorized) {
            this.props.history.replace(URLS.SIGN_IN_PAGE);
        }
    }

    /**
     * Change tasks status handler
     * @param id - ID of a tasks
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
     * Delete tasks handler
     * @param id - ID of a tasks
     */
    onClickDeleteTask = (id) => {
        this.props.removeTaskById(id)
            .then(
                () => this.props.getTaskList("inbox")
            );
    };

    /**
     * Add new entered character to state
     * @param event - event of pressing on baseButton
     */
    onChange = (event) => {
        this.setState({
                value: event.target.value
            }
        );
    };

    /**
     * Add new tasks, that text entered from inputs
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
        if (this.props.tasks.length === 0) {
            return (
                <div className={"empty-todo-list"}>
                    <article className={"empty-todo-list__suggest suggest"}>
                        <p className={"suggest__text"}>
                            You do not have any tasks in «To Do».
                        </p>
                        <p className={"suggest__text"}>
                            But you can create them right here!
                        </p>
                    </article>
                </div>
            );
        }
        return this.props.tasks.map((item) => {
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
        tasks: state.taskListReducer.tasks,
        isAuthorized: state.userReducer.isAuthorized
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
        removeTaskById: bindActionCreators(removeTaskById, dispatch),
        whoami: bindActionCreators(whoami, dispatch)
    }
};

/**
 * Connect component with store
 */
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
