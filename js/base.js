function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}
function loadJson(url) {
    console.log("loadJson", url);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error loading JSON', url, error);
            throw error;
        });
}
function loadFile(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .catch(error => {
            console.error('Error loading file', url, error);
            throw error;
        });
}
function addLoad(func) {
    if (window.onload) {
        const oldLoad = window.onload;
        window.onload = function () {
            func();
            oldLoad();
        }
    } else {
        window.onload = func;
    }
}
function getParams(){
    const params = {};
    const queryString = window.location.search;
    if (queryString) {
        const pairs = queryString.substring(1).split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value || "");
        }
    }
    return params;
}
const params = getParams();
function getParam(name, defaultValue = null) {
    return params[name] || defaultValue;
}