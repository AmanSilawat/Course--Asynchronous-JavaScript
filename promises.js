const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                // JavaScript Object Notation
                const data = JSON.parse(request.responseText);
                resolve(data)
            } else if (request.readyState === 4) {
                reject('error getting resource')
            }
        });
        // working only server side: todos.json
        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos-json/aman.json').then(data=>{
    console.log('Promise resolved:', data);
}).catch((err)=>{
    console.log("Promise rejected:", err);
});

// output:
// Promise resolved: 
//                  0: {id: 20, name: "Aman", project: "xyz"}
//                  1: {id: 20, name: "Aman", project: "xyz"}
//                  2: {id: 20, name: "Aman", project: "xyz"}