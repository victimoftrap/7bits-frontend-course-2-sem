import React from 'react';

import Task from '../../components/task/Task';
import TaskInputField from "../../components/form/field/TaskInputField";
import CreateTaskButton from "../../components/buttons/create/CreateTaskButton";

import list from './list';
import './style.css';

export default class ToDo extends React.Component {
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
     * Convert values from json to list of <Task/> tags
     * @returns {*[]} <Task/> with values from json
     */
    renderList = () => {
        return this.state.taskList.map((item) => {
            return (
                <Task key={item.id} id={item.id} title={item.text} status={item.status}/>
            );
        });
    };

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
};
