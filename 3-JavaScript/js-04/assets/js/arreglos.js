//Arreglos
//Colección de elementos
//Cada elemento ocupa una posición
//Esa posición se conoce como índice y comienza a partir de 0

let arr = [1,2,3,4];
console.log(arr);


//propiedades - describen
//métodos - acciones que puede realizar

console.log(arr[2]);
arr[4]=190;
arr[4]="Hola";
console.log(arr);


const arreglo = ["adiós"];

//push()
arreglo.push(2);
arreglo.push(true);

let num = 500;
arreglo.push(num);
console.log(arreglo);

//unshift()
arreglo.unshift("A");
arreglo.unshift("B");
console.log(arreglo);


//metodo para quitar elementos
//pop()
//quita un elemento al final del arreglo

//shift
//quitar un elemento del inicio del arreglo

let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);


//splice()
//quita una parte de cualquier posición de nuestro arreglo
//permite reemplazar un elemento
//permite insertar un elemento en una posición en específico

arreglo.splice(1, 1, "parangaricutirimicuaro", 568980);

//splice()
//posición de inicio
//cantidad de elementos a afectar
//elemento que queremos insertar
console.log(arreglo);


//modifican el arreglo original


//Métodos que no modifican el arreglo original
//hacen una copia, modifican esa copia

//slice()
//cortar partes de un arreglo
let dato3 = arreglo.slice(0, 2);

//debemos indicar un rango
//genera un arreglo con los elementos con elementos cortados
console.log(dato3);
console.log(arreglo);



