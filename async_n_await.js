// Fetch API

const getTodos = async () => {
    const response = await fetch('todos-json/aman.json');
    const data = await response.json();
    return data;
};

console.log(1);
console.log(2);

getTodos().then((data) => {
    console.log('resolved:', data);
});

console.log(3);
console.log(4);

// output:
// 1
// 2
// 3
// 4
// resolved: (3) [{…}, {…}, {…}]


// fetch('todos-json/aman.json')
// .then((response) => {
//     console.log('resolved', response);
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log('rejected', err);
// });
