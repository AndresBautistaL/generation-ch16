//sort()
//ordenar elementos de un arreglo
const arr = ["X", "A", "H", "a", "W", "b"];
console.log(arr);

arr.sort ();
console.log(arr);

const arr2 = ["Hola", "adios", "bienvenido", "Calle"];
arr2.sort();
console.log(arr2);

const arr3 = [5, 1231, 567, 1, 80];
arr3.sort((a, b) => b - a); //ordena números de forma mayor a menor
console.log(arr3);

arr3.sort((a, b) => a - b); //ordena números de forma menor a mayor
console.log(arr3);



//funcion declarada
//hoisting
//un proceso de reacomodo automático del código
function sumar(a,b){

}

//funcion expresada

//funciones flecha
/* const dividir = (a,b) => {
    return a / b;
} */

const dividir = (a, b) => a / b;

/* console.log(dividir(10,2)); */


//forEach()
//un ciclo que recorre en automático todo nuestro arreglo

const arrNumeros = [1,4,6,8,10, 20, 30];
/* 
for (let i=0; i<arrNumeros.length; i++){
    arrNumeros[i] = arrNumeros[i] * 2;
   
}console.log(arrNumeros); */

//forEach(elemento, indice, arreglo completo)
arrNumeros.forEach((elemento) => console.log(elemento *= 2)); // elemento = elemento * 2





