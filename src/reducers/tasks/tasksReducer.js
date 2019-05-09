import * as responseTypes from '../../actions/tasks/actionTypes';

/**
 * Initial state for global store's state
 */
const initialState = {
    tasks: [],
    error: null
};

/**
 * Reducer for task list. Process piece of data from store by action
 *
 * @param state  - global state for application
 * @param action - action with updates
 * @return new object of redux store
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case responseTypes.GET_TASK_LIST_SUCCESS: {
            return {
                ...state,
                tasks: action.tasks === undefined ? [] : action.tasks,
                error: null
            }
        }
        case responseTypes.GET_TASK_LIST_ERROR: {
            return {
                ...state,
                tasks: [],
                error: action.error
            }
        }

        case responseTypes.ADD_TASK_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case responseTypes.ADD_TASK_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }

        case responseTypes.REMOVE_TASK_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case responseTypes.REMOVE_TASK_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }

        case responseTypes.UPDATE_TASK_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case responseTypes.UPDATE_TASK_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }

        default: {
            return state;
        }
    }
}