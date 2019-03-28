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
            text: '',
            taskList: list.data
        };
    }

    onChange = (event) => {
        this.setState({
                text: event.target.value
            }
        );
    };

    onSubmit = (event) => {
        event.preventDefault(); // for cancelling default page updating
        this.setState( {
            taskList: [
                {
                    id: "101",
                    text: this.state.text,
                    status: "inbox"
                },
                ...this.state.taskList]
        })
    };

    renderList = () => {
        return list.data.map((item) => {
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
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <CreateTaskButton
                        type={"submit"}
                    />
                </form>
                {this.renderList()}
            </React.Fragment>
        );
    };
};
