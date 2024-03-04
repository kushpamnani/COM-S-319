fetch("./kushp_Activity08_MoviesFromJSON.json")
  .then((response) => response.json())
  .then((myMovies) => loadMovies(myMovies));

function loadMovies(myMovies) {
  var movieCards = document.getElementById("movie-cards");
  myMovies.movies.forEach((movie, index) => {
    let card = document.createElement("div");
    card.classList.add("col");

    card.innerHTML = `
            <div class="card shadow-sm">
                <img src="${movie.url}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.year}</p>
                    <input type="checkbox" class="form-check-input" id="checkbox${index}" checked>
                    <label class="form-check-label" for="checkbox${index}">Show</label>
                </div>
            </div>
        `;

    movieCards.appendChild(card);

    // Checkbox functionality
    document
      .getElementById(`checkbox${index}`)
      .addEventListener("change", function () {
        if (this.checked) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
  });
}
