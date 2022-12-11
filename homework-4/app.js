const idResponse = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const content =await response.json();
    let posts = document.querySelector('.posts')

    let key;
    
    for(key in content){
        posts.innerHTML += `
        <li id="post">
            <p id="userId">User Id: ${content[key].userId}</p>
            <p id="id">Id: ${content[key].id}</p>
            <p id="title">${content[key].title}</p>
            <p id="body">${content[key].body}</p>
        </li>
        `
    }
}
idResponse();
