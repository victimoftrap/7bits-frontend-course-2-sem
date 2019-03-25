import React from 'react';

import Task from '../../components/task/Task';
import TaskInputField from "../../components/form/field/TaskInputField";
import CreateTaskButton from "../../components/buttons/create/CreateTaskButton";

import list from './list';
import './style.css';

export default class ToDo extends React.Component {
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
                <form className="main__form">
                    <TaskInputField/>
                    <CreateTaskButton/>
                </form>
                {this.renderList()}
            </React.Fragment>
        );
    };
};
