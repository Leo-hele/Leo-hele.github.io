---
layout: null
---
function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}
class LoadError extends Error {
    constructor(response) {
        super(`HTTP Error! status: ${response.status}`);
        this.name = "LoadError";
        this.code = response.status;
        this.response = response;
    }
}
function loadJson(url) {
    console.log("loadJson", url);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new LoadError(response);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error loading JSON', url, error);
            throw error;
        });
}
function loadFile(url) {
    console.log("loadFile", url);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new LoadError(response);
            }
            return response.text();
        })
        .catch(error => {
            console.error('Error loading file', url, error);
            throw error;
        });
}
function addLoad(func, obj = window) {
    if (obj.onload) {
        const oldLoad = obj.onload;
        obj.onload = function () {
            func();
            oldLoad();
        }
    } else {
        obj.onload = func;
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
async function getError(error_code) {
    const data = await loadFile(`{{ site.url }}/${error_code}/`);
    const parser = new DOMParser();
    const newDoc = parser.parseFromString(data, "text/html");
    document.replaceChild(newDoc.documentElement, document.documentElement);
}
function execute(){
    document.querySelectorAll("a").forEach((link) => {
        const isNas = "nas" in link.dataset;
        if (! (isNas || link.href.endsWith("/"))){
            link.href += "/";
        }
        if (link.target === "_blank"){
            link.target = link.href;
        }
    })
    translate.execute();
}