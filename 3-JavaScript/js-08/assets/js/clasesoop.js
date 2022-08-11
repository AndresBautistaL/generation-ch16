class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }
    
    get nombre(){
        return this._nombre;
    }

    set_nombre(nombre){
        this.nombre = nombre;
    }

}

let persona1 = new Persona ('José', 'Perez');
console.log(persona1);

persona1.nombre = 'Hugo Sanchez'
console.log(persona1.nombre);

let persona2 = new Persona ("Ana", "Cruz");
console.log(persona2);

/* test */
console.log(Persona);

