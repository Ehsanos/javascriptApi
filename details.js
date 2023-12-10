document.addEventListener('DOMContentLoaded', function () {
    const detailsContainer = document.getElementById('details');
    const commentsDive = document.getElementById('commentsDiv')
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('id');

    const detailsApiUrl = `https://jsonplaceholder.typicode.com/posts/${itemId}`;
    const commentsPost = `https://jsonplaceholder.typicode.com/posts/${itemId}/comments`;

    fetch(detailsApiUrl)
        .then(response => response.json())
        .then(details => {
            detailsContainer.innerHTML = `
<h3>Post id:${details.id} </h3>
<h4>title: ${details.title}</h4>
<p>${details.body} </p>
`;
        })
        .catch(error => console.error('Error fetching details:', error));


    fetch(commentsPost)
        .then(response => response.json())
        .then(comments => {
            comments.forEach(item=>{

            const listItem = document.createElement('h3' );
                const body=document.createElement('p');
                const email=document.createElement('p');
            const line=document.createElement('hr')
            const br=document.createElement('br')
                listItem.textContent=item.name
                body.textContent=item.body
                email.textContent = item.email;
    commentsDive.append(listItem,body,email,line,br)})})

        .catch(error => console.error('Error fetching details:', error));


});
