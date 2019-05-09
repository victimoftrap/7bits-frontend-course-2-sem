/**
 * Check status of server response
 *
 * @param response  - response from server
 * @throws Error    - if response status from 4xx to 5xx
 * @return response - if response status from 2xx to 3xx
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.statusText);
}

/**
 * Build request for the server
 *
 * @param requestMethod - http method name
 * @param body          - request body with data
 * @param token         - authorization token for user
 * @returns created request
 */
function buildRequest(requestMethod, body, token) {
    const headers = new Headers({
        "Accept":       "application/json",
        "Content-Type": "application/json"
    });
    if (token !== null) {
        headers.set("Authorization", `Bearer ${token}`);
    }

    return {
        method: requestMethod,
        headers: headers,
        body: body
    };
}

/**
 * Do GET request
 *
 * @param url   - url for making request
 * @param token - authorization token
 * @throws Error if server send error response
 * @return response json
 */
export function get(url, token) {
    return fetch(url, buildRequest('GET', null, token))
        .then(response => {
            return checkStatus(response)
        })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

/**
 * Do POST request
 *
 * @param url   - url to the server
 * @param body  - body of the POST request
 * @param token - authorization token
 * @throws Error if server send error response
 * @return response json
 */
export function post(url, body, token) {
    return fetch(url, buildRequest('POST', body, token))
        .then(response => {
            return checkStatus(response)
        })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

/**
 * Do DELETE request
 *
 * @param url   - url to task, that would be deleted
 * @param token - authorization token
 * @throws Error if server send error response
 * @return response json
 */
export function remove(url, token) {
    return fetch(url, buildRequest('DELETE', null, token))
        .then(response => {
            return checkStatus(response)
        })
        .catch(error => {
            throw error
        });
}

/**
 * Do PATCH request
 *
 * @param url   - url to task, that would be updated
 * @param body  - body of the PATCH request
 * @param token - authorization token
 * @throws Error if server send error response
 * @return response json
 */
export function patch(url, body, token) {
    return fetch(url, buildRequest('PATCH', body, token))
        .then(response => {
            return checkStatus(response)
        })
        .catch(error => {
            throw error
        });
}