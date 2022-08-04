let celcius = parseInt(prompt("Escribe un valor "));

let celciusToFahrenheit = function (celcius) {
    return ((celcius * 1.8) + 32);
}


let fahrenheit = celciusToFahrenheit(celcius);
alert("El valor en grados Fahrenheit es:" + fahrenheit);

let celciusToKelvin = function (celcius) {
    return (celcius + 273.15);
}

let kelvin = celciusToKelvin(celcius);
alert("El valor en grados Kelvin es:" + kelvin);