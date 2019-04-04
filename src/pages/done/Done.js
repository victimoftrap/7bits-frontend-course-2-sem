import React from 'react';
import {connect} from "react-redux";

import DoneTask from "../../components/task/done/DoneTask";

import './style.css';

import list from './list';

/**
 * Component-container for tasks with status "done"
 */
class Done extends React.Component {
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
export default connect(mapStateToProps, mapDispatchToProps)(Done);
