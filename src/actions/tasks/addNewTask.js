import {post} from '../../fetcher/fetcher';

import {ADD_TASK_ERROR, ADD_TASK_SUCCESS} from "./actionTypes";

/**
 * Create new task
 *
 * @param taskData - data for a new task
 */
export default function addNewTask(taskData) {
    return dispatch => {
        const token = localStorage.getItem('jwt-token');

        return post(`/api/tasks/`, JSON.stringify(taskData), token)
            .then(() => {
                dispatch({
                    type: ADD_TASK_SUCCESS,
                    error: null
                })
            })
            .catch((error) => {
                dispatch({
                    type: ADD_TASK_ERROR,
                    error: error
                })
            })
    }
}