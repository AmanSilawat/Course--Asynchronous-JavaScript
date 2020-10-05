// Async & Await

const getTodos = async () => {
    const response = await fetch('todos-json/amanKhan.json');

    // handle json file naming or file not found side exeption
    if (response.status != 200) {
        throw new Error('Can not fetch the data');
    }

    const data = await response.json();
    return data;
};

getTodos()
    .then((data) => console.log('resolved:', data))
    .catch((err) => console.log('rejection:', err.message))
