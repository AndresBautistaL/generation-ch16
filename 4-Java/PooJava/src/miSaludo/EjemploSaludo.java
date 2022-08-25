package miSaludo;

import miSaludo.Saludo;

public class EjemploSaludo {
    public static void main(String[] args) {
        Saludo objSaludo;//declarar el objeto
        objSaludo = new Saludo();//crear el objeto con new
        objSaludo.saludar();//llamando al método

        Saludo objSaludo1 = new Saludo();

        System.out.println(objSaludo.saludar1());

        System.out.println("Este es otro objeto: -> " + objSaludo1.saludar1());

        objSaludo.texto = "Hola";
        System.out.println("objSaludo = " + objSaludo);

/*        objSaludo1.a = 4;
        System.out.println("objSaludo1 = " + objSaludo1);*/
    }
}
