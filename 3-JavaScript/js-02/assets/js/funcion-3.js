/* Funciones como objeto */

function miFuncion (a, b){
    let res = 0; //propiedad
    res = (a * 3); //acción o proceso
return res;
}

console.log (typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);