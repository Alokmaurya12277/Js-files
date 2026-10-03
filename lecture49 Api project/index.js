

let a = "http://www.omdbapi.com/?apikey=d82a9eb0&"
let b = "d82a9eb0"


let movieForm = document.querySelector("#movieForm")
let movieInput = document.querySelector("#movieInput")
let movieHub = document.querySelector("#movieHub")

movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputValue = movieInput.value.trim()

    if (!inputValue) {
        return
    }
    console.log(inputValue);
    searchMovies(inputValue)

})

async function searchMovies(movieName) {
    movieHub.innerHTML = `<div class="loader"></div> `
    let response = await fetch(`http://www.omdbapi.com/?apikey=d82a9eb0&s=${movieName}`)
    let data = await response.json()
    console.log(data);

    if (data.Response === "True") {
        displayMovie(data.Search)
    }else{
         movieHub.innerHTML = `<p>${data.Error} </p> `
    }

}

function displayMovie(data) {
    movieHub.innerHTML = ""
    data.forEach((movie) => {
        let div = document.createElement("div")
          div.dataset.imdbID = movie.imdbID
          div.setAttribute("class", "movie-card")
            
        div.innerHTML =
            `
         <div class="w-full ml-10 mt-5" >
            <div>
                <img src=${movie.Poster} class = "rounded-md object-cover w-full h-80 " alt="">
            </div>
            <p>${movie.Title}</p>
            <p>${movie.Year} </p>
        </div>
    `
        movieHub.append(div)
    })

}

movieHub.addEventListener("click", (e) =>{
    e.stopPropagation();

    const movieCard = e.target.closest(".movie-card")
    const imdbID = movieCard.dataset.imdbID
    location.href = `movie-details.html?id=${imdbID}`
})