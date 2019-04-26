import {postUserData} from "../../fetcher/fetcher";

import {REGISTER_SUCCESS, REGISTER_FAIL} from "./actionTypes";

/**
 * Send register request and handle response
 * @param email - user email
 * @param password - user password
 */
export default function register(email, password) {
    return dispatch => {
        return postUserData('/api/signup', {
            username: email,
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