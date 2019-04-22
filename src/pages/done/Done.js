import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import DoneTask from "../../components/task/done/DoneTask";

import './style.css';

import getTaskList from "../../actions/tasksList/getTaskList";
import updateTaskById from "../../actions/tasksList/updateTaskById";
import removeTaskById from "../../actions/tasksList/removeTaskById";

/**
 * Component-container for tasks with status "done"
 */
class Done extends React.Component {
    componentDidMount() {
        this.props.getTaskList("done");
    }

    /**
     * Change task status handler
     * @param id - ID of a task
     */
    onClickChangeTaskStatus = (id) => {
        this.props.updateTaskById(id)
            .then(
                () => this.props.getTaskList("done")
            );
    };
    /**
     * Delete task handler
     * @param id - ID of a task
     */
    onClickDeleteTask = (id) => {
        this.props.removeTaskById(id)
            .then(
                () => this.props.getTaskList("done")
            );
    };

    /**
     * Convert values from json to list of <DoneTask/> tags
     * @returns {*}
     */
    renderList = () => {
        return this.props.taskList.map((item) => {
            return (
                <DoneTask
                    key={item.id}
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
        updateTaskById: bindActionCreators(updateTaskById, dispatch),
        removeTaskById: bindActionCreators(removeTaskById, dispatch)
    }
};

/**
 * Connect component with store
 */
export default connect(mapStateToProps, mapDispatchToProps)(Done);
