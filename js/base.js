function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
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
            console.error('Error loading file:', error);
            throw error;
        });
}