import {postUserData} from "../../fetcher/fetcher";

import {REGISTER_SUCCESS, REGISTER_FAIL} from "./actionTypes";

/**
 * Send register request and handle response
 * @param username - user name
 * @param password - user password
 */
export default function register(username, password) {
    return dispatch => {
        return postUserData('/api/signup', {
            username: username,
            password: password
        }).then((response) => {
            dispatch({
                type: REGISTER_SUCCESS
            })
        }).catch((error) => {
            dispatch({
                type: REGISTER_FAIL,
                error: error
            })
        })
    }
}