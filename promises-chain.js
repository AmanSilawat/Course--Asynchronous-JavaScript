const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                // JavaScript Object Notation
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting resource');
            }
        });
        // working only server side: todos.json
        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos-json/aman.json')
    .then((data) => {
        console.log('Promise 1 resolved:', data);
        return getTodos('todos-json/imran.json');
    })
    .then((data) => {
        console.log('Promise 2 resolved:', data);
        return getTodos('todos-json/raju.json');
    })
    .then((data) => {
        console.log('Promies 3 resolved:', data);
    })
    .catch((err) => {
        console.log('Promise rejected:', err);
    });

// output:
// Promise 1 resolved: (3) [{…}, {…}, {…}]
// Promise 2 resolved: (3) [{…}, {…}, {…}]
// Promies 3 resolved: (3) [{…}, {…}, {…}]