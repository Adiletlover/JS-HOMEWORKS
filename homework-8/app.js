
const getAllEl = document.getElementById("get-all-btn")
const filmEl = document.getElementById("film")
const gameEl = document.getElementById("game")
const bookEl = document.getElementById("book")
const pElements = document.getElementById("p-classes")


const moviedata = [
    {
        title: "Harry Poter",
        type: "film",
        id: 11
    },
    {
        title: "God of War",
        type: "game",
        id: 12

    },
    {
        title: "War and Piece",
        type: "book",
        id: 13

    }, 
    {
        title: "Avatar",
        type: "film",
        id: 14

    },
    {
        title: "Elden Ring",
        type: "game",
        id: 15

    },
    {
        title: "Martin Eden",
        type: "book",
        id: 16

    }
]
const getElements = () => {
    let key;
    pElements.innerHTML = ""
    for(key in moviedata){
        pElements.innerHTML += `
        <div id="post">
            <p id="title">Title: ${moviedata[key].title}</p>
            <p id="type">Type: ${moviedata[key].type}</p>
        </div>
        <hr>
        `
    }
}
const getMovies = () => {
    let keys;
    pElements.innerHTML = ""
    for(keys in moviedata){
        if(moviedata[keys].type === "film"){
            pElements.innerHTML += `
            <div id="post">
                <p id="title">Title: ${moviedata[keys].title}</p>
                <p id="type">Type: ${moviedata[keys].type}</p>
            </div>
            <hr>
            `  
        }
    }
}
const getBooks = () => {
    let keys;
    pElements.innerHTML = ""
    for(keys in moviedata){
        if(moviedata[keys].type === "book"){
            pElements.innerHTML += `
            <div id="post">
                <p id="title">Title: ${moviedata[keys].title}</p>
                <p id="type">Type: ${moviedata[keys].type}</p>
            </div>
            <hr>
            `  
        }
    }
}
const getGames = () => {
    let keys;
    pElements.innerHTML = ""
    for(keys in moviedata){
        if(moviedata[keys].type === "game"){
            pElements.innerHTML += `
            <div id="post">
                <p id="title">Title: ${moviedata[keys].title}</p>
                <p id="type">Type: ${moviedata[keys].type}</p>
            </div>
            <hr>
            `  
        }
    }
}
const dataChanger = () =>{
    
}
getAllEl.addEventListener('click', getElements)
filmEl.addEventListener('click', getMovies)
bookEl.addEventListener('click', getBooks)
gameEl.addEventListener('click', getGames)
