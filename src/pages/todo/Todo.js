import React from 'react';
import {connect} from 'react-redux'

import TodoTask from "../../components/task/todo/TodoTask";
import TaskInputField from "../../components/form/field/TaskInputField";
import CreateTaskButton from "../../components/buttons/create/CreateTaskButton";

import './style.css';

import list from './list';

/**
 * Component-container for tasks with status "inbox". Container for main page
 */
class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            taskList: list.data
        };
    }

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
        this.setState({
            taskList: [
                {
                    id: "101",
                    text: this.state.value,
                    status: "inbox"
                },
                ...this.state.taskList
            ],
            value: ""
        })
    };

    /**
     * Convert values from json to list of <TodoTask/> tags
     * @returns {*[]} <TodoTask/> with values from json
     */
    renderList = () => {
        return this.state.taskList.map((item) => {
            return (
                <TodoTask key={item.id} id={item.id} title={item.text}/>
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
const mapStateToProps = (state) => ({});

/**
 * Send action to store
 * @param dispatch - method for sending action
 * @returns {{}}
 */
const mapDispatchToProps = (dispatch) => ({});

/**
 * Connect component with store
 */
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
