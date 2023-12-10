document.addEventListener('DOMContentLoaded', function() {
    const dataList = document.getElementById('dataList');

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const listItem = document.createElement('h3');
                const bodyPost=document.createElement('p');
                const line=document.createElement('hr')
                const br=document.createElement('br')
                listItem.textContent = item.title;
                bodyPost.textContent=item.body;
                listItem.addEventListener('click', function() {

                    window.location.href = 'details.html?id=' + item.id;
                });
                dataList.append(listItem,bodyPost,line,br);
            });
        })
        .catch(error => console.error('error fetching data:', error));
});
