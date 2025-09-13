/*
base.js
基层函数
2025-09-07
基于jQuery, jQuery Cookie, translate.js
导入频率：
    每个页面都需要导入
*/
const d$ = $(document), w$ = $(window);
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
    const data = await loadFile(`${location.hostname}/${error_code}/`);
    const parser = new DOMParser();
    const newDoc = parser.parseFromString(data, "text/html");

    $('html').html($(newDoc).find('html').html());
}

function execute(){
    $("a").each(function() {
        const link = $(this);
        const isNas = link.data("nas") !== undefined;
        if (! (isNas || link.attr("href").endsWith("/"))){
            link.attr("href", link.attr("href") + "/");
        }
        if (link.attr("target") === "_blank"){
            link.attr("target", link.attr("href"));
        }
    });
    translate.execute();
}

function SetState(obj) {
    // 处理null和undefined
    if (obj === null) return 'null';
    if (obj === undefined) return 'undefined';

    // 处理字符串类型
    if (typeof obj === 'string') {
        return encodeURIComponent(obj) + '|str';
    }

    // 处理数字类型
    if (typeof obj === 'number') {
        return obj.toString() + '|num';
    }

    // 处理布尔类型
    if (typeof obj === 'boolean') {
        return obj.toString() + '|bool';
    }

    // 处理数组类型
    if (Array.isArray(obj)) {
        try {
            let ret = "[";
            obj.forEach((item) => {
                ret += `"${SetState(item)}",`;
            });
            return ret + "]|arr";
        } catch (e) {
            console.error('Error converting array to string:', e);
            return '';
        }
    }
    if (obj instanceof WeakMap){
        try {
            let ret = "[";
            obj.forEach((value, key) => {
                ret += `{"key":"${SetState(key)}","value":"${SetState(value)}"},`;
            });
            return encodeURIComponent(ret + "]|weakmap");
        } catch (e) {
            console.error('Error converting WeakMap to string:', e);
            return '';
        }
    }

    // 处理对象类型
    if (typeof obj === 'object') {
        try {
            return encodeURIComponent(JSON.stringify(obj)) + '|obj';
        } catch (e) {
            console.error('Error converting object to string:', e);
        }
    }

    // 默认情况：转为字符串
    return encodeURIComponent(String(obj)) + '|unknown';
}

function GetState(s) {
    // 处理空值
    if (!s || typeof s !== 'string'){
        console.error('Invalid input for GetState:', s);
        return null;
    }
    let str = decodeURIComponent(s);
    if (str === 'null') return null;
    if (str === 'undefined') return undefined;

    // 解析类型标记
    const lastPipeIndex = str.lastIndexOf('|');
    if (lastPipeIndex === -1) {
        // 没有类型标记，返回原始字符串
        return decodeURIComponent(str);
    }

    const value = decodeURIComponent(str.substring(0, lastPipeIndex));
    const type = str.substring(lastPipeIndex + 1);

    // 根据类型标记转换值
    switch (type) {
        case 'str':
            return value;
        case 'num':
            return parseFloat(value);
        case 'bool':
            return value === 'true';
        case 'arr':
            try {
                let arr = [];
                const items = value.substring(1, value.length - 1).split(',');
                items.forEach((item) => {
                    if (item) arr.push(GetState(item.slice(1, -1))); // 去掉引号
                    else arr.push(undefined);
                });
                return arr;
            } catch (e) {
                console.error('Error parsing array:', e);
                return [];
            }
        case 'obj':
        case 'weakmap': // WeakMap无法完全恢复，返回普通对象
            try {
                let map = new WeakMap();
                const items = value.substring(1, value.length - 1).split(',');
                items.forEach((item) => {
                    if (item) map.set(GetState(item.slice(1, -1)), GetState(item.slice(1, -1))); // 去掉引号
                    else map.set(undefined, undefined);
                });
                return map;
            } catch (e) {
                console.error('Error parsing WeakMap:', e);
                return {};
            }
        default:
            return value;
    }
}

function setCookie(name, value) {
    $.cookie(name, SetState(value), { path: '/', expires: 365 });
}

function getCookie(name) {
    return GetState($.cookie(name));
}
