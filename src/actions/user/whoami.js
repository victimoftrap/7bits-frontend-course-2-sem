import {get} from "../../fetcher/fetcher";

import {AUTHENTICATE_FAIL, AUTHENTICATE_SUCCESS} from "./actionTypes";

/**
 * Send request for recognizing user
 */
export default function whoami() {
    return (dispatch) => {
        return get('api/whoami')
            .then((response) => {
                console.log(response);
                dispatch({
                    type: AUTHENTICATE_SUCCESS,
                    username: response.username
                });
            })
            .catch((error) => {
                localStorage.removeItem('jwt-token');
                dispatch({
                    type: AUTHENTICATE_FAIL,
                    error: error
                });
            })
    }
}