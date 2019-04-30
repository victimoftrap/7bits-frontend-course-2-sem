import * as types from "../../actions/user/actionTypes";

/**
 * Initial state for global store's state
 */
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
        case types.REGISTER_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case types.REGISTER_FAIL: {
            return {
                ...state,
                error: action.error
            }
        }

        case types.AUTHORIZE_SUCCESS: {
            return {
                ...state,
                isAuthorized: true,
                error: null
            }
        }
        case types.AUTHORIZE_FAIL: {
            return {
                ...state,
                isAuthorized: false,
                error: action.error
            }
        }

        case types.AUTHENTICATE_SUCCESS: {
            return {
                ...state,
                username: action.username,
                error: null
            }
        }
        case types.AUTHENTICATE_FAIL: {
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