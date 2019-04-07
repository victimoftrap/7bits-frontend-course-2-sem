import {get} from '../../fetcher/fetcher';

import * as responseTypes from './actionTypes';

export default function getTaskList(status) {
    return dispatch => {
        return get(`mockapi/get${status.charAt(0).toUpperCase() + status.slice(1)}TaskList.json`)
            .then(response => {
                dispatch({
                    type: responseTypes.GET_TASK_LIST_SUCCESS,
                    taskList: response.taskList
                })
            })
            .catch(error => {
                dispatch({
                    type: responseTypes.GET_TASK_LIST_ERROR,
                    error: error
                })
            })
    }
}