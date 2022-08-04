'use strict'

function miFuncion(a, b){
    return (a + b);
}

let resultado = miFuncion(3, 6);

/* Función expresión o función anónima */

let suma = function (a, b) {return (a + b)};

let res = suma (2, 3);
let caracteres = "La suma es : "
console.log(caracteres + res);

let resta = function (a, b) {return (a - b)};
res = resta (5, 3);
console.log("La resta es: " + res);

let multiplicacion = function (a, b) {return (a * b)}
res = multiplicacion(4, 5);
console.log("La multiplicación es: " + res);

let division = function (a, b) {return (a / b)}
res = division(7, 3);
console.log("La division es: " + res.toFixed(2));

/* Función autollamada / Self Invoking */
(function (a, b){
    console.log("El resultado de Self Invoking es:" + (a + b))
})(3, 4);
