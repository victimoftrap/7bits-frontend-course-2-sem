import {post} from '../../fetcher/fetcher';

import {ADD_TASK_ERROR, ADD_TASK_SUCCESS} from "./actionTypes";

/**
 * Create new task
 * @param taskData - data for a new task
 */
export default function addNewTask(taskData) {
    return dispatch => {
        return post(`/api/tasks/`, taskData)
            .then((response) => {
                dispatch({
                    type: ADD_TASK_SUCCESS,
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