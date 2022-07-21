let numero = prompt("Escribe un número");
let siete = 7;
let ocho = 8;
/*
function divisibleSiete (numero, siete)  {

    if (Number.isInteger (numero / siete));

    return divisibleSiete;
}


function divisibleOcho (numero, ocho)  {

    if (Number.isInteger (numero / ocho));

    return divisibleOcho;
}

if (divisibleSiete == true && divisibleOcho == true ) {

    console.log("El número " + numero + " es divisible entre siete y ocho");

} else

    console.log("El número" + numero + " no es divisible entre siete y ocho");

console.log("Fin del programa");*/


function laDivision (numero, siete, ocho) {

        if (Number.isInteger(numero/ siete) && Number.isInteger (numero / ocho)){

            console.log("El número " + numero + " es divisible entre siete y ocho");
        } else

            console.log("El número" + numero + " no es divisible entre siete y ocho");

    return laDivision
}