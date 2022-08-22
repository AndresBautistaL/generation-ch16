import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        Scanner escaner = new Scanner((System.in));
        System.out.println("Escribe tu edad");
        int edad = escaner.nextInt();
        System.out.println(edad);
        escaner.close();

        if (edad >= 18){
            System.out.println("Eres mayor de edad");
        } else {
            System.out.println("Eres menor de edad");
        }

        //Operador ternario
        String resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);
    }
}
