import React from 'react';
import Task from "../../components/task/Task";
import list from './list';
import './style.css';

export default class Done extends React.Component {
    renderList = () => {
        return list.data.map((item) => {
            return (
                <Task title={item.text} status={item.status}/>
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        );
    };
};