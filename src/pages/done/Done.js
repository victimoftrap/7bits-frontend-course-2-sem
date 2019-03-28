import React from 'react';

import DoneTask from "../../components/task/done/DoneTask";

import './style.css';

import list from './list';

export default class Done extends React.Component {
    renderList = () => {
        return list.data.map((item) => {
            return (
                <DoneTask key={item.id} id={item.id} title={item.text}/>
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