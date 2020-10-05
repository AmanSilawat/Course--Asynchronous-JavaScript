const request = new XMLHttpRequest();

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
    if(request.readyState === 4) {
        console.log(request.responseText);
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();