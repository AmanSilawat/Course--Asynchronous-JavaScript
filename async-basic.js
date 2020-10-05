console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired');
}, 1000);

console.log(3);
console.log(4);

//output
// 1
// 2
// 3
// 4
// callback function fired