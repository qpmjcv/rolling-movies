
const moviesSection = document.getElementById("movieCards")
let movies = ""

fetch("http://localhost:3000/Movies")
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      movies += `
        <div class="card" style="width: 18rem;">
          <img src=${item.image} class="card-img-top" alt=${item.title}>
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <a href=${item.url} class="btn btn-primary">Ver Más</a>
            </div>
          </div>
          `
    })
    moviesSection.innerHTML = movies
  })