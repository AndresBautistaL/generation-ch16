let payasos = parseInt(prompt("Escribe el número de payasos vendidos: "));
let munecas = parseInt(prompt("Escribe el número de muñecas vendidas: "));


let calcularPesoPayasos = function (payasos) {
    return (payasos * 0.112);
}

let pesoTotalPayasos = calcularPesoPayasos(payasos);
alert("El peso total de los payasos es: " + pesoTotalPayasos.toFixed(2));

let calcularPesoMunecas = function (munecas) {
    return (munecas * 0.075);
}

let pesoTotalMunecas = calcularPesoMunecas(munecas);
alert("El peso total de las munecas es: " + pesoTotalMunecas.toFixed(2));

let pesoTotalCombinado = pesoTotalPayasos + pesoTotalMunecas;


if(pesoTotalCombinado <= 1){
    alert("Los payasos y las munecas se enviarán en un pedido, el paquete pesa: " + pesoTotalCombinado.toFixed(2) + " kg");
} else if (pesoTotalCombinado >= 1){
    alert("Los payasos y las muñecas se enviarán en: " + Math.ceil(pesoTotalCombinado) + " pedidos, el paquete pesa " + pesoTotalCombinado.toFixed(2) + " kg");
}