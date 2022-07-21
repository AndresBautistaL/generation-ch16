function sumar (numero1, numero2){

    console.log("Voy a sumar");
    console.log("El resultado de la suma es:  " + (numero1 + numero2));

}





//Ejercicio 2

/*
function calculadoraSueldo (sueldoIngresado, diasTrabajados) {
    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);
    /*
    const sueldo = 600;
    const diasSemana = 6;
    
    const semanasMes = 4;

    console.log("Sueldo semanal: " + (sueldoIngresado * diasTrabajados));
    console.log("Sueldo mensual: " + (sueldoIngresado * diasTrabajados * semanasMes));

}*/


function calcularPorcentaje (numero, porcentaje){

    let resultado = numero * (porcentaje / 100); //local

    return resultado;
}

let porcentajeResultado = calcularPorcentaje(100,0.40);
console.log(porcentajeResultado);

let multi = 5*5;
console.log(multi);