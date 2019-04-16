/**
 * Check status of server response
 * @param response - response from server
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
        mode: 'no-cors',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: body
    };
}

/**
 * Get task from url
 * @param url - url for making request
 */
export function get(url) {
    return fetch(url, buildRequest('GET', null))
        .then(response => checkStatus(response))
        .then(response => response.json())
        .catch(error => {
            return error;
        });
}

/**
 * Create new task
 * @param url - url to the server
 * @param taskData - data of new task
 */
export function post(url, taskData) {
    return fetch(url, buildRequest('POST', JSON.stringify(taskData)))
        .then(response => {console.log(response);checkStatus(response)})
        .catch(error => {
            return error;
        });
}

/**
 * Remove task
 * @param url - url to task, that would be deleted
 */
export function remove(url) {
    return fetch(url, buildRequest('DELETE', null))
        .then(response => checkStatus(response))
        .catch(error => {
            return error
        });
}

/**
 * Update task
 * @param url - url to task, that would be updated
 * @param updatedTask - data of updated task
 */
export function patch(url, updatedTask) {
    return fetch(url, buildRequest('PATCH', JSON.stringify(updatedTask)))
        .then(response => checkStatus(response))
        .catch(error => {
            return error
        });
}