/* URLs para consumir */
const urlGatitos = "https://api.thecatapi.com/v1/images/search";

const imgGatito = document.getElementById("imgGatito");
const btn = document.getElementById("btnGatito");
console.log(imgGatito);

/* Eventos */
btn.addEventListener ("click", () =>{
    console.log("Boton presionado");

    //Agregar la funcionalidad
    obtenerGatitos(urlGatitos)
});
/* Funciones */
async function obtenerGatitos(url){
    const respuesta = await fetch(url);
    const datos = await respuesta.json()

    console.log(datos);
    console.log(datos[0].id);
    console.log(datos[0].url);
    console.log(datos[0].width);

    imgGatito.src = datos[0].url;
}