import {post} from "../../fetcher/fetcher";

import {AUTHORIZE_FAIL, AUTHORIZE_SUCCESS} from "./actionTypes";

export default function login(login, password) {
    return dispatch => {
        const authData = {
            login: login,
            password: password
        };

        return post('/api/signin', authData)
            .then((response) => {
                localStorage.setItem("jwt-token", response.token);
                dispatch({
                    type: AUTHORIZE_SUCCESS
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