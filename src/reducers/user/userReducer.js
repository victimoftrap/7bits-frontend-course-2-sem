import {AUTHENTICATE_FAIL, AUTHORIZE_FAIL, AUTHORIZE_SUCCESS, WHOAMI_SUCCESS} from "../../actions/user/actionTypes";

const initialState = {
    isAuthorized: !!localStorage.getItem("jwt-token"),
    error: null
};

/**
 * Reducer for user authenticate
 * @param state - global state for application
 * @param action - action with updates
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZE_SUCCESS: {
            return {
                ...state,
                isAuthorized: true,
                error: null
            }
        }
        case AUTHORIZE_FAIL: {
            return {
                ...state,
                isAuthorized: false,
                error: action.error
            }
        }
        case WHOAMI_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case AUTHENTICATE_FAIL: {
            return {
                ...state,
                isAuthorized: false,
                error: action.error
            }
        }
        default: {
            return state
        }
    }
}