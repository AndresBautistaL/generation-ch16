'use strict';

//conversión de tipos de datos
// casteo - parseo - casting - parsing

/* Coersión de tipo de dato
   Conversión automática de datos
 */
let num = "5";
let num2 = "10";

/*concatenación: resultado de unir dos cadenas de texto o un número con una cadena de texto*/
console.log(num + num2);

/* Number() ocupar directamente en la variable para que se quede el cambio
   Convierte cadenas o booleanos a números */
let num3 = Number("56");
console.log(num3);

/* String () 
   Convierte numeros o booleanos a cadenas */
   
let num4 = String(4);
console.log(num4);
console.log(typeof num4);

/* Boolean()
   Convierte numeros y cadenas a booleanos
   0 y "", null, undefined, NaN - false --> faulsy values - valores que tienden a falso
   todos los demás números los convierte a true */

   let num5 = Boolean(null);
   console.log(num5);
   console.log(typeof num5);