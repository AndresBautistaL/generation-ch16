package miSaludo;

import java.util.Scanner;

public class Saludo {
    String texto = "Hola mundo Java OOP";
    private Scanner sc = new Scanner(System.in);
    private String nombre = "";
    public void saludar(){
        System.out.println("Hola Java OOP");
    }

    public String saludar1(){
        //En este tipo de funciones debemos retornar el mismo tipo de valor
        //int a = 0;
        return texto;
    }

    public void nuevoSaludo(){
        System.out.println("Ingrese su nombre");
        nombre = sc.next();
        System.out.println("Hola " + nombre);
    }

}
