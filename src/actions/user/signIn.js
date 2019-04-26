import {postUserData} from "../../fetcher/fetcher";

import {AUTHORIZE_FAIL, AUTHORIZE_SUCCESS} from "./actionTypes";

export default function signIn(username, password) {
    return dispatch => {
        return postUserData('/api/signin', {
            username: username,
            password: password
        })
            .then((response) => {
                const token = response.token;
                if (token === undefined) {
                    throw new Error("Not signed in");
                }

                localStorage.setItem("jwt-token", token);
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