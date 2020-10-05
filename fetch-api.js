// Fetch API

// 1. fetch data, 2. take response
fetch('todos-json/aman.json')
    .then((response) => {
        console.log('resolved', response);

        // 3. return response json data
        return response.json();
    })
    .then((data) => {
        // 4. access the json data
        console.log(data);
    })

    // 5. catch part
    .catch((err) => {
        // promise when rejected: network error or don't reach the api
        console.log('rejected', err);
    });
