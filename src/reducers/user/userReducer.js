import * as URLS from "../../actions/user/actionTypes";

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
        case URLS.AUTHORIZE_SUCCESS: {
            return {
                ...state,
                isAuthorized: true,
                error: null
            }
        }
        case URLS.AUTHORIZE_FAIL: {
            return {
                ...state,
                isAuthorized: false,
                error: action.error
            }
        }
        case URLS.WHOAMI_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case URLS.AUTHENTICATE_FAIL: {
            return {
                ...state,
                isAuthorized: false,
                error: action.error
            }
        }
        case URLS.REGISTER_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case URLS.REGISTER_FAIL: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state
        }
    }
}