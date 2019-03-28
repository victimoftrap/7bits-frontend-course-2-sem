import React from 'react';

import DoneTask from "../../components/task/done/DoneTask";

import './style.css';

import list from './list';

/**
 * Component-container for tasks with status "done"
 */
export default class Done extends React.Component {
    /**
     * Convert values from json to list of <DoneTask/> tags
     * @returns {*}
     */
    renderList = () => {
        return list.data.map((item) => {
            return (
                <DoneTask key={item.id} id={item.id} title={item.text}/>
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
                {this.renderList()}
            </React.Fragment>
        );
    };
};