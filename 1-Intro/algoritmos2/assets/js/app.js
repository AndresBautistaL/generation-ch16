//Arreglos
//uso de corchetes
let num = [];
console.log(num);

//uso de new Array
let arr1 = new Array();
console.log(arr1);

//usar un arreglo
const arr = [1, 2, 3, 4, 5];
console.log(arr);

//Notación de corchetes
console.log(arr[3]);
arr[5] = 25;
arr[6] = 8;
arr[6] = 0;

// arr[7] = undefined
// arr[8] = undefined
// arr[9] = undefined

arr[10] = 40;
arr[7] = 9;
console.log(arr);

//Propiedades
console.log(arr.length);

//Métodos
//acciones que puede realizar un arreglo

//Push
const frutas = ["Manzana", "Plátano"];
console.log(frutas);

//agrega un valor al final del arreglo

let fruta = "Toronja";

frutas.push("Naranja");
frutas.push(fruta);

console.log(frutas);

//Pop
//quita un elemento al final del arreglo

let elementoBorrado = frutas.pop();
console.log(frutas);
console.log(elementoBorrado);

//Unshift
let devolver = frutas.unshift("Uva", "Pera");
console.log(frutas);
console.log(devolver);
//Shift
let devolver2 = frutas.shift();
console.log(frutas);
console.log(devolver2);



//objetos
//estructura especial llamada objeto
//nos permiten guardar pares de valores 
//key - value
//llave valor

const obj = {
    nombre : "Pedro", 
    edad : 25,
    color : "Azul",
    hobbies : ["Leer", "Correr"]
};

console.log(obj);