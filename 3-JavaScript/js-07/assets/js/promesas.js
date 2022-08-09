//variable que simula los pedidos
const saludo = "Hola mundo";

const datos = [
    {
        nombre: "Jonathan",
        apellido: "Vazquez"
    },

    {
        nombre: "Jonathan",
        apellido: "Vazquez"
    },

    {
        nombre: "Jonathan",
        apellido: "Vazquez"
    }
];


//console.log(datos);

//Funcion para simular una petición
function obtenerDatos(){

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve (datos);
            } else {
                reject("Nunca te quiso");
            }
            
        }, 5000);
    });


};


/* obtenerDatos().then((datos) => {
    console.log(datos);
});  */

//forma #1
/* obtenerDatos().then((datos) => {
    console.log("forma 1");
    console.log(datos);
}).catch( (error) => {
    console.log("Existe un error en la petición 1");
    console.log(error);
});  */

//forma #2 - funciones asíncronas - await async

async function funcionAsincrona () {
    try{

        const datos = await obtenerDatos();
        console.log(datos);
    }catch (error){
        console.log("Existe un error en la petición");
        console.log(error);
    }

}

funcionAsincrona();