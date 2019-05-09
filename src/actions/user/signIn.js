import {post} from "../../fetcher/fetcher";

import {AUTHORIZE_FAIL, AUTHORIZE_SUCCESS} from "./actionTypes";

/**
 * Send sign in request and handle response
 *
 * @param username - user name
 * @param password - user password
 */
export default function signIn(username, password) {
    return dispatch => {
        const userData = {
            username: username,
            password: password
        };

        return post('/api/signin', JSON.stringify(userData), null)
            .then((response) => {
                const token = response.token;
                /*if (token === undefined) {
                    throw new Error("Not signed in");
                }*/
                localStorage.setItem("jwt-token", token);

                dispatch({
                    type: AUTHORIZE_SUCCESS,
                    error: null
                })
            })
            .catch((error) => {
                dispatch({
                    type: AUTHORIZE_FAIL,
                    error: error
                })
            })
    }
}