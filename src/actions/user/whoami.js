import {get} from "../../fetcher/fetcher";

import {AUTHENTICATE_FAIL, WHOAMI_SUCCESS} from "./actionTypes";

export default function whoami() {
    return (dispatch) => {
        return get('api/whoami')
            .then((response) => {
                console.log(response);
                dispatch({
                    type: WHOAMI_SUCCESS
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