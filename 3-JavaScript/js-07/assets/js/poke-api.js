/* URL a consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"

/* Elementos del DOM */
const imgPokemon = document.getElementById("imgPokemon");
//console.log(imgPokemon);

const idPokemon = document.getElementById("idPokemon");
//console.log(idPokemon);

const nombrePokemon = document.getElementById("nombrePokemon");
//console.log(nombrePokemon);

const listaHabilidades = document.getElementById("lista-habilidades");
//console.log(listaHabilidades);

const listaTipos = document.getElementById("lista-tipos")
//console.log(listaTipos);

const formulario = document.getElementById("buscador-pokemon");
console.log(formulario);

/* Eventos */
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log("Boton");
    const inputPokemon = document.getElementById("busqueda-pokemon");
    console.log(inputPokemon.value);

    const nuevaBusqueda = urlPokemon + inputPokemon.value;
    console.log(nuevaBusqueda);
    obtenerPokemon(nuevaBusqueda);
})

/* Funciones */

async function obtenerPokemon(url){

try{

    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    console.log(datos);
    console.log(datos.forms[0].name);
    console.log(datos.abilities);
    console.log(datos.id);
    console.log(datos.types);
    console.log(datos.sprites.other["official-artwork"].front_default);



    const pokemon = {
        nombre: datos.forms[0].name,
        habilidades: datos.abilities,
        numero: datos.id,
        tipos: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default
    };



    //Imagen, nombre y ID
    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent = `ID: ${pokemon.numero}`;
    nombrePokemon.textContent = pokemon.nombre;  

    //Habilidades

    console.log(pokemon.habilidades.length);

    let template = ``;

    for (let i=0; i < pokemon.habilidades.length; i++){
        const nombreHabilidad = pokemon.habilidades[i].ability.name;
        console.log(nombreHabilidad);
        template += `<li class="list-group-item"> ${nombreHabilidad} </li>`;

    }

    
    listaHabilidades.innerHTML = template; 

    //Tipos

    console.log(pokemon.tipos);

    let templateTipos = ``;
    
        pokemon.tipos.forEach((tipo) =>{
        //console.log(tipo.type.name);
        const nombreTipo = tipo.type.name;
        console.log(nombreTipo);
        templateTipos += `<li class="list-group-item"> ${nombreTipo} </li>`;
    }); 

    listaTipos.innerHTML = templateTipos; 
    //Test forma 1
    /*          let template2 = ``;

    for (let i=0; i < pokemon.tipos.length; i++){
        const nombreTipos = pokemon.tipos[i].type.name;
        console.log(nombreTipos);
        template2 += `<li class="list-group-item"> ${nombreTipos} </li>`;

    }

    listaTipos.innerHTML += template2;  */

} catch (e){
    alert("Pokemon no válido");
}


 
}   

//obtenerPokemon(urlPokemon);