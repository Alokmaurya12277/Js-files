


const params = new URLSearchParams(location.search)
const imdbID = params.get("id")
const movieDetails = document.querySelector("#movie-details")

if(imdbID){
    searchMovie(imdbID.trim())
}

async function searchMovie(imdbID) {
  
    let response = await fetch(`http://www.omdbapi.com/?apikey=d82a9eb0&i=${imdbID}&plot=full`)
    let data = await response.json()
    console.log(data);

    if (data.Response === "True") {
        displayMovie(data)
    }else{
         movieHub.innerHTML = `<p>${data.Error} </p> `
    }

}

function displayMovie(data){

movieDetails.innerHTML = 
    `
     <div>
    <img src=${data.Poster} alt="">
   </div>

   <div>
    <h2>${data.Title}</h2>
    <section>
        <p>${data.Released} </p>
        <p>${data.Rated} </p>
        <p>${data.Runtime} </p>
        <p>${data.Genre} </p>
        <p>${data.imdbRating} </p>
    </section>
    <div>
        <p>Plot Overview</p>
        <p>${data.Plot} </p>
    </div>
    <div>
        <section>
            <p>Director</p>
            <p>${data.Director} </p>
        </section>
        <section>
            <p>Writer</p>
            <p>${data.Writer} </p>
        </section>
    </div>
    <div>
        <p>Actors</p>
        <p>${data.Actors} </p>
    </div>
     <div>
        <section>
            <p>Language</p>
            <p>${data.Language} </p>
        </section>
        <section>
            <p>Country</p>
            <p>${data.Country} </p>
        </section>
    </div>
</div>

<button>
<a href =https://www.imdb.com/title/${data.imdbID} target ="_blank">View on IMDb</a>
</button>
</div>
`
}


