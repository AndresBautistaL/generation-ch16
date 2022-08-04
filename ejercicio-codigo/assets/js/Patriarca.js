let dineroCajero = 10000;
let temp = 0;
let NIP = 9182;

while(temp !=3){
    let transacion = prompt("Menú Cajero: \n 1) Escriba 1 para retirar \n 2) Escriba 2 para consultar saldo \n 3) Escriba 3 para terminar operación");

    switch (transacion){
        case "1":
            let ID = parseInt(prompt("Escriba su NIP para retirar: "));
                if (NIP === ID){
                    let retiro = parseInt(prompt("Escriba la cantidad a retirar, máximo " + dineroCajero + " pesos"));
                    if (retiro % 200 == 0 && retiro >= 1 && retiro <= dineroCajero){
                        let tempRetiro = retiro;
                        let billeteMil = Math.trunc(tempRetiro / 1000);
                        tempRetiro = tempRetiro - (billeteMil * 1000);
                        let billeteQuinientos = Math.trunc(tempRetiro / 500);
                        tempRetiro = tempRetiro - (billeteQuinientos * 500);
                        let billeteDoscientos = Math.trunc(tempRetiro / 200);
                        tempRetiro = tempRetiro - (billeteDoscientos * 200);
                        let billeteCien = Math.trunc(tempRetiro / 100);
                        tempRetiro = tempRetiro - (billeteCien * 100);
                        let billeteVeinte = Math.trunc(tempRetiro / 20);
                        tempRetiro = tempRetiro - (billeteVeinte * 20);

                        alert("Se retira " + retiro + " pesos en " + billeteMil + " billete(s) de 1000, " + billeteQuinientos + " billete(s) de 500, " + billeteDoscientos + " billete(s) de 200, " + billeteCien + " billete(s) de 100 y " + billeteVeinte + " billete(s) de 20.");
                        dineroCajero = dineroCajero - retiro;
                    } else {
                    alert("La cantidad no es un múltiplo de 200 o no se cuenta con el saldo suficiente, saldo disponible: " + dineroCajero);
                    }
                } else {
                    alert ("NIP no válido");
                }
        break;
        
        case "2":
            alert("Saldo disponible en cajero: " + dineroCajero);
        break;

        case "3":
            alert("Fue un gusto atenderle");
            temp = 3;
        break;

        default:
            alert("Opción no válida");

    }
}