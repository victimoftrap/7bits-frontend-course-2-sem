import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { I18n } from 'react-redux-i18n';

import DoneTask from "../../components/tasks/done/DoneTask";
import * as URLS from "../sitePageUrls";

import './style.css';

import getTaskList from "../../actions/tasks/getTaskList";
import updateTaskById from "../../actions/tasks/updateTaskById";
import removeTaskById from "../../actions/tasks/removeTaskById";
import whoami from "../../actions/user/whoami";

/**
 * Component-container for tasks with status "done"
 */
class Done extends React.Component {
    componentDidMount() {
        if (!this.props.isAuthorized) {
            this.props.history.replace(URLS.SIGN_IN_PAGE);
        }

        this.props.whoami();
        this.props.getTaskList("done");
    }

    /**
     * Change tasks status handler
     *
     * @param id - ID of a tasks
     */
    onClickChangeTaskStatus = (id) => {
        this.props.updateTaskById(id)
            .then(
                () => this.props.getTaskList("done")
            );
    };
    /**
     * Delete tasks handler
     *
     * @param id - ID of a tasks
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
        if (this.props.tasks.length === 0) {
            return (
                <div className={"empty-done-list"}>
                    <article className={"empty-done-list__suggest suggest"}>
                        <p className={"suggest__text"}>
                            {I18n.t('layouts.base.pages.done.empty-list.title-empty')}
                        </p>
                        <p className={"suggest__text"}>
                            {I18n.t('layouts.base.pages.done.empty-list.title-suggest')}
                        </p>
                    </article>
                </div>
            );
        }
        return this.props.tasks.map((item) => {
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
     *
     * @returns {*} React fragment
     */
    render() {
        return (
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        );
    }
}

Done.propTypes = {
    history:        PropTypes.func.isRequired,
    isAuthorized:   PropTypes.bool.isRequired,
    tasks:          PropTypes.array.isRequired,
    getTaskList:    PropTypes.func.isRequired,
    updateTaskById: PropTypes.func.isRequired,
    removeTaskById: PropTypes.func.isRequired,
    whoami:         PropTypes.func.isRequired
};

/**
 * Function for converting current state of store to props
 *
 * @param state - state of store
 */
const mapStateToProps = (state) => {
    return {
        tasks: state.taskListReducer.tasks,
        isAuthorized: state.userReducer.isAuthorized
    }
};

/**
 * Send action to store
 *
 * @param dispatch - method for sending action
 */
const mapDispatchToProps = (dispatch) => {
    return {
        getTaskList: bindActionCreators(getTaskList, dispatch),
        updateTaskById: bindActionCreators(updateTaskById, dispatch),
        removeTaskById: bindActionCreators(removeTaskById, dispatch),
        whoami: bindActionCreators(whoami, dispatch)
    }
};

/**
 * Connect component with store
 */
export default connect(mapStateToProps, mapDispatchToProps)(Done);
