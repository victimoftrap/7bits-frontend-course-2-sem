import {get} from '../../fetcher/fetcher';

import {GET_TASK_LIST_ERROR, GET_TASK_LIST_SUCCESS} from "./actionTypes";

/**
 * Get task list by some status
 *
 * @param status - status of the task
 */
export default function getTaskList(status) {
    return dispatch => {
        const token = localStorage.getItem('jwt-token');

        return get(`/api/tasks?status=${status}`, token)
            .then(response => {
                dispatch({
                    type: GET_TASK_LIST_SUCCESS,
                    tasks: response.tasks
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