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