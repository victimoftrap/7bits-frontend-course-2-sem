import {post} from "../../fetcher/fetcher";

import {REGISTER_SUCCESS, REGISTER_FAIL} from "./actionTypes";

/**
 * Send register request and handle response
 *
 * @param username - user name
 * @param password - user password
 */
export default function register(username, password) {
    return dispatch => {
        const userData = {
            username: username,
            password: password
        };

        return post('/api/signup', JSON.stringify(userData), null)
            .then((response) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    error: null
                })
            }).catch((error) => {
                dispatch({
                    type: REGISTER_FAIL,
                    error: error
                })
            })
    }
}