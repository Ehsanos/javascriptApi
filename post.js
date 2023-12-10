const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const Data = new FormData(document.getElementById('postDataForm'));


function senddata() {
    fetch(apiUrl, {
        method: 'POST',
        body: Data
    })
        .then(response => {
            console.log('test')
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('POST request successful:', data);
        })
        .catch(error => {
            console.error('Error making POST request:', error);
        });

}