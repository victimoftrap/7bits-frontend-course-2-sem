/**
 * Check status of server response
 * @param response
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.statusText);
}

/**
 * Build request to server
 * @param requestMethod - http method name
 * @param body - request body with data
 * @returns request
 */
function buildRequest(requestMethod, body) {
    return {
        method: requestMethod,
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: body
    };
}

/**
 * Get something from url
 * @param url url for making request
 */
export function get(url) {
    return fetch(url, buildRequest('GET', ''))
        .then(response => checkStatus(response))
        .then(response => response.json())
        .catch(error => {
            return error;
        });
}

export function post(url, taskData) {
    return fetch(url, buildRequest('POST', JSON.stringify(taskData)))
        .then(response => checkStatus(response))
        .catch(error => {
            return error;
        });
}

export function remove(url) {
    return fetch(url, buildRequest('DELETE', ''))
        .then(response => checkStatus(response))
        .catch(error => {
            return error
        });
}

export function patch(url) {
    return fetch(url, buildRequest('PATCH', ''))
        .then(response => checkStatus(response))
        .catch(error => {
            return error
        });
}