const palindromo = require('../js/palindromo.js');

describe('Pruebas de la función palindromo', () => {

    test('debe regresar "Es un palindromo" si ingresamos ojo', () => {
    
        let mensaje = 'Es un palindromo';
        let palabra = 'ojo';

        expect(palindromo(palabra)).toBe(mensaje);
    })
  
    test('debe regresar "No es un palindromo" si ingresamos generation', () => {
    
        let mensaje = 'Es un palindromo';
        let palabra = 'generation';

        expect(palindromo(palabra)).not.toBe(mensaje);
    })

    test('al ingresar un número debe regresar el mensaje', () => {
        let mensaje = 'No es una palabra';
        let palabra = 1;

        expect(palindromo(palabra)).toBe(mensaje);
    })

});