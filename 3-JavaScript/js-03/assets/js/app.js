/* Control de flujo */
/* Condicionales */
/* If */

let condicion = "A";

if(condicion === "A"){
    /* Código que se hace si se cumple la condición A */
    console.log("Entro en la condición A");
} else if (condicion === "B"){
    /* Condición que se hace si se cumple la condición B */
    console.log("Entro en la condición B");
} else if (condicion === "C"){
    /* Código que se hace si se cumple la condición C */
    console.log("Entro en la condición C");
} else {
    /* Código  que se hace si no se cumple ninguna de las condiciones anteriores*/
    console.log("No cumple con ninguna");
}


function dividir (a, b){

if (b === 0){
    console.log("No se puede realizar la operación");
} else {
    console.log(a/b);
}
}


/* Switch */

let nuevaCondicion = 1;



switch(nuevaCondicion){
    
    case "Hola":
        console.log("Buenos dias");
    break;

    case "Adios":
        console.log("Nos vemos");   
    break;

    case "Multiplicar":
        console.log("Te mando un saludo");
    break;

    default: //por defecto
        console.log("No entendí tu mensaje");
}

/* == o === regresa un true si la condición se cumple*/
//Se utiliza para evaluar expresiones
let edad = 30

    switch(edad >= 18){
        case true:
            console.log("mayor");
            break
        case false:
            console.log("menor");
    }

let elegir = "sumar";

switch (elegir){
    case "sumar":
        console.log("Vamos a sumar");
    break;
    case "restar":
        console.log("Vamos a restar");
    break;
    case "dividir":
        console.log("Vamos a dividir");
    break;
    case "multiplicar":
        console.log("Vamos a multiplicar");
    break;
    default:
        console.log("No entiendo");

}


if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}
