let edad = parseInt(prompt("Escribe tu edad"));
console.log(edad);


if (edad >= 0 && edad <= 17){

    console.log("Eres menor de edad, tienes" + edad + "años");

}else if (edad >=18) {

    console.log("Eres mayor de edad, tienes" + edad + "años");

}else if (edad < 0){

    console.log("edad no válida");
}

console.log("Fin del programa");

