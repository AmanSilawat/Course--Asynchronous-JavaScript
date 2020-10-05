const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // JavaScript Object Notation
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });
    // working only server side: todos.json 
    request.open('GET', 'todos.json');
    request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log('callback fire');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);

// output:
// 1
// 2
// 3
// 4
// callback fire
// {
//     {id: 20, name: "Aman", project: "xyz"}
//     {id: 21, name: "Imran", project: "123"}
//     {id: 22, name: "Raju", project: "abc"}
// }
