import {get} from '../../fetcher/fetcher';

import {GET_TASK_LIST_ERROR, GET_TASK_LIST_SUCCESS} from "./actionTypes";

/**
 * Get task list by some status
 * @param status - status of the tasks
 */
export default function getTaskList(status) {
    return dispatch => {
        return get(`http://localhost:80/tasks?status=${status}`)
            .then(response => {
                dispatch({
                    type: GET_TASK_LIST_SUCCESS,
                    taskList: response.taskList
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_TASK_LIST_ERROR,
                    error: error
                })
            })
    }
}