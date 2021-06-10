// variables
const mainPage = document.getElementById('main')
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const inputSearch = document.getElementById('search');
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
getAllMovies(APIURL)

async function getAllMovies(url){
    let movies = await fetch(url);
    myResult = await movies.json();
    showMovies(myResult.results)
}

function showMovies(movies){
    let content =''
    movies.map(movie => {
        const { poster_path, title, vote_average, overview } = movie;
        content += `
        <div class="movie">
           <img src="${IMGPATH + poster_path}">
           <div class="movie-info">
           <h3>${title}</h3>
           <span>${vote_average}</span>
           </div>
           <div class="overview">
           <h3>Overview:</h3>
           ${overview}
       </div>
       </div>
        `
    })
    mainPage.innerHTML = content
    
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = inputSearch.value;

    if (searchTerm) {
        getAllMovies(SEARCHAPI + searchTerm);
    }
});