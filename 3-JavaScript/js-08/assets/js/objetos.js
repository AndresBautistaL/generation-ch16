let x = 10;
console.log(x.length);


let persona = {
    nombre: 'Juan',
    apellido: 'Fernandez',
    edad: 23,
    email: 'usuario@servidor.com',
    /* nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    } */
    idioma: 'es',
    get leng(){
        return this.idioma.toUpperCase();
    },
    set leng(lang){
        this.idioma =lang.toLowerCase();
        
    }
}

console.log(persona.leng);
persona.leng = 'ES';
console.log(persona.leng);
console.log(persona.idioma);

persona.tel = "5555555555"; 
persona.te1 = "12345";

console.log(persona.nombre);
//console.log(persona.nombreCompleto());
console.log(persona);

//for in

for (varPropiedad in persona){
    console.log(persona[varPropiedad]);
}


let personaString = JSON.stringify(persona);