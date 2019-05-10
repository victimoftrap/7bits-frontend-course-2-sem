import {remove} from "../../fetcher/fetcher";

import {REMOVE_TASK_ERROR, REMOVE_TASK_SUCCESS} from "./actionTypes";

/**
 * Delete task by ID
 *
 * @param id - ID of a task
 */
export default function removeTaskById(id) {
    return dispatch => {
        const token = localStorage.getItem('jwt-token');

        return remove(`/api/tasks/${id}`, token)
            .then(() => {
                dispatch({
                    type: REMOVE_TASK_SUCCESS,
                    error: null
                })
            })
            .catch(error => {
                dispatch({
                    type: REMOVE_TASK_ERROR,
                    error: error
                })
            })
    };
}