let max = 10;
let min = 1; 
let numerom = Math.random()*(max-min) + min;
numerom = parseInt(numerom); 

console.log("El numero aleatorio es:"+ numerom);

while(true){
      let usuario = prompt("Coloca un número del 1 al 10 para adivinar el número mágico o 0 para salir del programa");

if(usuario == numerom){ 
  alert("Adivinaste el número");
  break;
}
else if(usuario == 0){
  alert ("Fin del juego");
  break; 
}
else if(usuario < numerom){
  alert("EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO" );
}
else if(usuario > numerom){
  alert("EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO");
}

}