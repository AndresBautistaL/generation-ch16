const carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];
console.log(carreritas);

carreritas.splice(4, 1);
let agregar = carreritas.unshift("Andrea");
carreritas.splice(2, 1);
agregar = carreritas.unshift("Roberto");
carreritas.splice(2, 1);
agregar = carreritas.unshift("Lucia");
console.log(carreritas);

carreritas.splice(4,1);
console.log("Jesús fue eliminado");
console.log(carreritas);

carreritas.splice(0,1);
console.log("Se agregan Cristobal, Fernanda y Armando a la carrera");
agregar = carreritas.unshift("Cristobal");
agregar = carreritas.unshift("Fernanda");
agregar = carreritas.unshift("Armando");
agregar = carreritas.unshift("Lucia");
console.log(carreritas);

console.log("Federico lidera la  carrera");
agregar = carreritas.unshift("Federico");
console.log(carreritas);

