const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // JavaScript Object Notation
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });
    // working only server side: todos.json
    request.open('GET', resource);
    request.send();
};

// get first response data, after second than last third response data
// this is Callback Hell
getTodos('todos-json/aman.json', (err, data) => {
    console.log(data);
    getTodos('todos-json/imran.json', (err, data) => {
        console.log(data);
        getTodos('todos-json/raju.json', (err, data) => {
            console.log(data);
        });
    });
});
