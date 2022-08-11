/* Tipo predefinido */
let tiempo = new Date();
console.log(tiempo);
console.log(Math);

let obj_literal = {
    nombre: 'Juan',
    edad: 35
}

let obj_constructor = new Object();
obj_constructor.nombre = 'Dora';
obj_constructor.edad = 23;
console.log(obj_literal);
console.log(obj_constructor);

obj_literal['nombre'];
let llave = 'nombre';
console.log('esto es con llave' + obj_literal [llave]);


let obj_persona = {
    email: "shalala@gmail.com",
    apellido: "Ramirez",
    edad: 5,
    nombre: "Pugberto"
}

let personaConstructor = new Object();
personaConstructor.email = "test@gmail.com"
personaConstructor.apellido = "Sánchez";
personaConstructor.edad = 15;
personaConstructor.nombre = "Pugberto Jr"

/* prueba mia */
let segundoConstructor = new Object();
segundoConstructor.email = "nuevotest@gmail.com";
segundoConstructor.apellido = "Juárez";
personaConstructor.edad = 10;
segundoConstructor.nombre = "Carmelito";

console.log(obj_persona);
console.log(personaConstructor);
console.log(segundoConstructor);
/* Tipo cadena */
let cadena = "Esto es una cadena";
let cadena_Obj = new String("Esto es una cadena obj");
console.log(cadena);
console.log(cadena_Obj);

/* Tipo numérico */
let numero = 13;
let numero_obj = new Number(13.13);
console.log(numero);
console.log(numero_obj);

let lista = ["2", "3", "5", "7"];
let lista_obj = new Array ("1", "4", "6", "8", "9");
console.log(lista);
console.log(lista_obj);