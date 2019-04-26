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
    const token = localStorage.getItem("jwt-token");
    return {
        method: requestMethod,
        headers: new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }),
        body: body
    };
}

/**
 * Do GET request
 * @param url - url for making request
 */
export function get(url) {
    return fetch(url, buildRequest('GET', null))
        .then(response => {
            return checkStatus(response)
        })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error;
        });
}

/**
 * Do POST request
 * @param url - url to the server
 * @param taskData - data of new task
 */
export function post(url, taskData) {
    return fetch(url, buildRequest('POST', JSON.stringify(taskData)))
        .then(response => {
            return checkStatus(response)
        })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error;
        });
}

/**
 * Do DELETE request
 * @param url - url to task, that would be deleted
 */
export function remove(url) {
    return fetch(url, buildRequest('DELETE', null))
        .then(response => {
            return checkStatus(response)
        })
        .catch(error => {
            return error
        });
}

/**
 * Do PATCH request
 * @param url - url to task, that would be updated
 * @param updatedTask - data of updated task
 */
export function patch(url, updatedTask) {
    return fetch(url, buildRequest('PATCH', JSON.stringify(updatedTask)))
        .then(response => {
            return checkStatus(response)
        })
        .catch(error => {
            return error
        });
}

/**
 * Do POST request with user data
 * @param url - url to the server
 * @param userData - request object with username and password
 */
export function postUserData(url, userData) {
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(userData)
    }).then(response => {
        return checkStatus(response);
    }).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    })
}