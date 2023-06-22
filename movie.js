const apiKey = "d63daf598f571c9333e34c8179490c4d";
const imgUrl = "https://image.tmdb.org/t/p/w200";
const listaDePelis = "https://api.themoviedb.org/3/movie/now_playing?";
const input = document.querySelector(".input")

const divCarteles = document.querySelector(".movie");

const url =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=d63daf598f571c9333e34c8179490c4d";

const div_lista = document.querySelector(".listaAlgunasPeliculas");
const imagen = document.querySelector(".imagen");

async function callApi() {
  const url2 = " https://image.tmdb.org/t/p/w200";
  const res = await fetch(url);
  const data = await res.json();
  const poster = `${data.results.poster_path}`;

  console.log(data);
  console.log(data.results[0].poster_path);
  console.log(data.results[0].title);
  console.log(data.results[0].original_language);

  data.results.forEach((element) => {
    for (let i = 0; i < poster.length; i++) {
      const poster = data.results[i];

      const film = document.createElement("img");
      film.classList.add("poster");
      film.src += url2 + data.results[i].poster_path;
      divCarteles.appendChild(film);

      const title = document.createElement("p");

      title.innerHTML += `
<p>${data.results[i].title}</p>`;
      const lenguaje = document.createElement("p");
      lenguaje.innerHTML += `
<p>${data.results[i].original_language}</p>`;
      divCarteles.appendChild(title)  
      divCarteles.appendChild(lenguaje);
    }
    
  });

input.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
const peliculas = data.results;
const pruebaFilter = peliculas.filter (film => {
    console.log(film);
    return console.log(film.includes(e.target.value));
})
pruebaFilter();
})








  
}
callApi();

