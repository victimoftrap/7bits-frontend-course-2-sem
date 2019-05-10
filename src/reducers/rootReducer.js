import {combineReducers} from 'redux';
import {i18nReducer} from 'react-redux-i18n';

import userReducer from "./user/userReducer";
import taskListReducer from './tasks/tasksReducer';

/**
 * Make root reducer from separated reducers. Call created reducers with requested params.
 *
 * @param state  - global state of application
 * @param action - new action from components with updates
 */
export default (state = {}, action) => {
    return combineReducers({
        taskListReducer,
        userReducer,
        i18n: i18nReducer
    })(state, action)
};