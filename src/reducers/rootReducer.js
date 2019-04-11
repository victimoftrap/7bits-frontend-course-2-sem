import {combineReducers} from 'redux';

import taskListReducer from './taskList/taskListReducer';

/**
 * Make root reducer from separated reducers. Call created reducers with requested params.
 * @param state
 * @param action
 */
export default (state = {}, action) => {
    return combineReducers({
        taskListReducer
    })(state, action)
};