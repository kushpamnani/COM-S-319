function getInputValue() {
    var inputVal = document.getElementById("movieName").value;
    fetch("./kushp_Activity08_MoviesFromJSON.json")
        .then(response => response.json())
        .then(myMovies => loadSpecificMovie(myMovies, inputVal));
}

function loadSpecificMovie(myMovies, movieName) {
    var mainContainer = document.getElementById("goodmovies");
    mainContainer.innerHTML = ''; // Clear existing content

    for (var i = 0; i < myMovies.movies.length; i++) {
        if(myMovies.movies[i].title === movieName) {
            let title = myMovies.movies[i].title;
            let year = myMovies.movies[i].year;
            let url = myMovies.movies[i].url;

            let div = document.createElement("div");
            div.innerHTML = `<h3>${title}</h3> <br> ${year} <br> <img src=${url} width="200">`;
            mainContainer.appendChild(div);
        }
    }
}
