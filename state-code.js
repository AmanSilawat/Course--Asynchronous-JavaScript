const request = new XMLHttpRequest();

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

request.addEventListener('readystatechange', () => {
    // 4, DONE, The operation is complete.    AND status is ok
    if (request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    } else if (request.readyState === 4) {
        console.log('could not fetch data.');
    }
});

// wrong API to show "could not fetch data".
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
