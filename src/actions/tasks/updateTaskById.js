import {patch} from "../../fetcher/fetcher";

import {UPDATE_TASK_ERROR, UPDATE_TASK_SUCCESS} from "./actionTypes";

/**
 * Update task by ID
 *
 * @param id          - ID of a task
 * @param updatedTask - new data for the task
 */
export default function updateTaskById(id, updatedTask) {
    return dispatch => {
        const token = localStorage.getItem('jwt-token');

        return patch(`/api/tasks/${id}`, JSON.stringify(updatedTask), token)
            .then(() => {
                dispatch({
                    type: UPDATE_TASK_SUCCESS,
                    error: null
                })
            })
            .catch(error => {
                dispatch({
                    type: UPDATE_TASK_ERROR,
                    error: error
                })
            })
    }
}