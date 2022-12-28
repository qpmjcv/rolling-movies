const seeMore = document.getElementById(item.id)
const details = document.getElementById()
let data = ""

fetch("http://localhost:3000/Movies")
  .then(response => response.json())
  .then(data => data = JSON.parse(response))

    ` 
<div class="col text-center">
<img src=${item.imge} class="px-5 row poster" alt="poster de la pelicula ">
<a href=${item.url}> <button class="btn row  my-5 btn-primary" type="button"> Reproducir </button> </a>
</div>
<div class="col">
<h2 class="fw-bold col">${item.title}</h2>
<div class="row">
  <div class="col">
    <h3>Genero:</h3>
    <p>${item.genre}</p>
  </div>
  <div class="col">
    <h3>Año:</h3>
    <p>${item.year}</p>
  </div>
  <div class="col">
    <h3>Duración:</h3>
    <p>${item.duration}</p>
  </div>
</div>
<div class="row">
  <h3 class="fw-bold">Resumen:</h3>
  <p>
    ${item.description}
  </p>
</div>
<div class="row">
  <div class="col">
    <h4>Director</h4>
    <p>${item.director}</p>
  </div>
  <div class="col">
    <h4>Guion</h4>
    <p>${item.script}</p>
  </div>
  <div>
    <h4>Casting:</h4>
    <p>${item.cast}</p> 
  </div>
 </div>
</div>
        `
    moviesSection.innerHTML = movies
    console.log(item.id)
 




























