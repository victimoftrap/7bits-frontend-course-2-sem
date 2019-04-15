import {get, post} from '../../fetcher/fetcher';

import * as responseTypes from './actionTypes';

export default function addNewTask(taskData) {
    return dispatch => {
        return post(url, taskData)
            .then((response) => {
                dispatch({
                    type: responseTypes.ADD_TASK_SUCCESS,
                })
            })
            .catch((error) => {
                dispatch({
                    type: responseTypes.ADD_TASK_ERROR,
                    error: error
                })
            })
    }
}