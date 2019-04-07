import {combineReducers} from 'redux';

import taskListReducer from './taskList/taskListReducer';

export default (state = {}, action) => {
    return combineReducers({
        taskListReducer
    })(state, action);
}