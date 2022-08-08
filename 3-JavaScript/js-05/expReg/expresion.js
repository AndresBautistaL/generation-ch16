//let texto = "hoy parece que va a salir el sol";
//let texto01 = "la espera en el aeropuerto de LA";
//let texto01 = "te marqué anoche";
//let = texto01 = "Los números primos son 2 3 5 7 dentro de los 10 primeros numeros"
let texto01 = "usuario@servidor.com"

//let buscar = /\d{3}/;
let buscar = /[\w]+@{1}[\w]+\.[a-z]{2,3}/;  

console.log(buscar.test(texto01));

