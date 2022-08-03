'use strict' //JavaScript de forma estricta

/*alt + shift + a comentario en párrafos*/
// let a; ctrl + k + c comentario de una línea

/* Tipos de variables */
let a; //local
const b = 0; //constante y local
var c; //global

const PI = 3.1416;

/* Tipos de datos */

//String
let cadena ="Hola mundo";
let cadena1 ='Hola mundo';

//Number
let numero = 5;
let numero1 = 5.89;
let numero3 = -5.89;

//Boolean
let booleano = true 
let booleano2 = false;

//undefined
let variable;

/*
  console.log(variable);
  NaN - Not a Number
  no es un número
  tratar de realizar alguna operación aritmética con algún dato que no es un número
*/

//null
let vacio = null;
//console.log(vacio);

/* Scope - contexto 
Espacio en el que vive la variable*/

/*
if (true){
    let d = 15;
}


//var d= "Hola"
d = "Hola";

console.log(d);
*/

/* 
    Plantillas literales
        template strings
        literal strings
        interpolación `${}`
*/

//console.log(`Esta es una cadena ${5+4}`);


let nombre = 'Raul';

//Let presentación = ``;
//console.log("Mi nombre es" + nombre);
//console.log(`Yo me llamo ${nombre}`);


/* Arreglos - matrices - arrays */
let arr = [1, "A", null, undefined, [true, false]];
//console.log(arr[4][1]);

if (arr[4][0] === true){
//  console.log("es verdad");
}

let arr2 = new Array();
//console.log(arr2);

/* Objetos */
//clave / valor
const persona = {
    nombre: 'Raúl',
    edad: 31,
    hobbies: [
        "Leer", 
        "Ver Shek 1 y 2", 
        "Comer"
    ],
    auto: {
        marca: "VW",
        modelo: "Pointer",
        year: 2000
    },
    saludar: function(){
        let test = "Saludar"   ;
        return test;
    }
};

    persona.nombre = "Panchito";

    //Notación de punto
    console.log(`Mi nombre es ${persona.nombre}`);

    console.log(`Mi hobbie es ${persona.hobbies[1]}`);

    console.log(`La marca de mi carro es ${persona.auto.marca}`);

    console.log(persona.saludar());

    console.log(`La acción que realizo es: ${persona.saludar()}`);