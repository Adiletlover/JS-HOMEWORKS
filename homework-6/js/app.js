const form = document.getElementById("userForm")
const inputEl = document.getElementById("input")
const btn = document.getElementById("btn")

let forFetchApiUsers = "https://jsonplaceholder.typicode.com/posts"

const getName = async () => {
    const response = await fetch (forFetchApiUsers)
    const data = await response.json()  
    const input = +inputEl.value;
    const result = (data[input-1]);
    const newResult = result.userId

    let posts = document.querySelector('.posts')

    let key;

    for(key in data){
        if(data[key].userId==newResult){
        posts.innerHTML += `
        <li id="post">
            <p id="userId">User Id: ${data[key].userId}</p>
            <p id="id">Id: ${data[key].id}</p>
            <p id="title">${data[key].title}</p>
            <p id="body">${data[key].body}</p>
        </li>
        `
        }
    }
    return newResult
}
btn.addEventListener('click', getName)
