//console.log(document.URL)

//getElementById()
console.log(document.getElementById('parrafo1'));

const parrafo1 = document.getElementById('parrafo1');

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el párrafo 1 ";

console.log(parrafo1.textContent); 
console.log(parrafo1.style);


parrafo1.style.color = 'red';
parrafo1.style.backgroundColor = "yellow";


//querySelector()
//etiqueta = p
//clase = .parrafo
//id = #parrafo1


const parrafo2 = document.querySelector('.parrafo');
console.log(parrafo2.textContent);

parrafo2.textContent += "Modificando el contenido desde JavaScript"; 

console.log(parrafo2.textContent);

//querySelectorAll()  //listas de nodos -nodelist
const parrafos = document.querySelectorAll('p');
console.log(parrafos);

parrafos[2].style.fontSize = "2rem";

//css - font-size
//js - fontSize - lower camel case


//Modificar los atributos de HTML

const enlace = document.getElementById('enlace');
console.log(enlace.href);

enlace.href = 'https://www.youtube.com/'
enlace.target = "_blank"
console.log(enlace.href);

/* Ejercicio
const nuevoTexto = document.querySelector('.nuevoTexto');
nuevoTexto.style.backgroundColor = "aqua";

const testEnlace = document.getElementById('testEnlace');
testEnlace.style.fontSize = "1rem";
 */

const parrafo4 = document.getElementById('parrafo4');
console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
//console.log(parrafo4.innerHTML); //muestra el html que haya en el interior del elemento
console.log(document.body.innerHTML); //muestra el html que haya en el interior del elemento
console.log(parrafo4.outerHTML);//muestra el contenido de HTML pero incluyendo al elemento


//parrafo4.outerHTML = '<a href="http://google.com">Enlacr</a>'; reemplaza el elemento completo 

//parrafo4.innerHTML = '<a href="http://google.com">Enlacr</a>'; reemplaza el contenido del elemento 

//parrafo4.innerHTML = '<div class = "elemento">Este es un div</div>';

//js permite modificar las clases css
//utilizando style
//utilizando classlist
console.log(parrafo4.classList.contains("elemento"));

const cambiarColor = () => {
    parrafo4.classList.toggle('elemento');
}

cambiarColor(); //se agrega la clase
cambiarColor(); //se quita la clase