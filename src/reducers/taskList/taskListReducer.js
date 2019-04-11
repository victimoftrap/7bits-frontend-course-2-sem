import * as responseTypes from '../../actions/tasksList/actionTypes';

/**
 * Initial state for global store's state
 */
const initialState = {
    taskList: [],
    error: null
};

/**
 * Reducer for task list. Process piece of data from store by action
 * @param state - global state for application
 * @param action - action with updates
 * @return new object of redux store
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case responseTypes.GET_TASK_LIST_SUCCESS: {
            return {
                ...state,
                taskList: action.taskList,
                error: null
            }
        }
        case responseTypes.GET_TASK_LIST_ERROR: {
            return {
                ...state,
                taskList: [],
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}