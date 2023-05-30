const perroActualElement = document.getElementById("perro-actual");
const spinner = document.getElementById("spiner");
const botonSaltar = document.getElementById("btn-saltar");
const like = document.getElementById("btn-like");
const dislike = document.getElementById("btn-dislike");
const contenedorLikePerros = document.getElementById("contenedor-like-perros");
const contenedorDislikePerros = document.getElementById("contenedor-dislike-perros");
const API = "https://dog.ceo/api/breeds/image/random";


spinner.classList.add("escondido");

contenedorLikePerros.classList.add("escondido");
contenedorDislikePerros.classList.add("escondido");

perroActualElement.addEventListener("load", ()=> {
    perroActualElement.classList.toggle("escondido",false);
    spinner.classList.toggle("escondido",true);
})

botonSaltar.addEventListener("click", nuevoPerro);
like.addEventListener("click",()=> rankingPerros("+"));
dislike.addEventListener("click",()=> rankingPerros("-"));

async function nuevoPerro() {
    spinner.classList.toggle("escondido", false);
    perroActualElement.classList.toggle("escondido", true);
    const res = await fetch(API);
    const resJson = await res.json();
    perroActualElement.src=resJson.message;
};

function rankingPerros(ranking) {
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = perroActualElement.src;
    if(ranking === "+"){
        contenedorLikePerros.appendChild(nuevaImagen);
    }else {
        contenedorDislikePerros.appendChild(nuevaImagen);
    }
    contenedorLikePerros.classList.toggle("escondido",false);
    contenedorDislikePerros.classList.toggle("escondido",false);
    
    nuevoPerro();
}


//Ejecucion
nuevoPerro();
