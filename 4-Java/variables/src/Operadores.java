import java.util.Scanner;

public class Operadores {
    public static void main(String[] args) {
        int i = 5, j = 4, suma = i + j;
        System.out.println("suma = " + suma);

        System.out.println("i + j = " + (i + j));

        System.out.println("i + j = " + i + j);

        int resta = i - j;
        System.out.println("resta = " + resta);

        System.out.println("i - j = " + (i - j));

        int multi = i * j;
        System.out.println("multipicacion = " + multi);
        System.out.println("i * j = " + (i * j));

        int division = i / j;
        System.out.println("division = " + division);

        float div1 = (float) i / (float) j;
        System.out.println("div1 = " + div1);

        int resto = i % j;
        System.out.println("resto = " + resto);

        resto = 8 % 5;
        System.out.println("resto = " + resto);

        Scanner scanner = new Scanner(System.in);
        System.out.println("Cual es tu nombre ");
        String dato = scanner.next();
        System.out.println("Tu nombre es: " + dato);

        //Con parseo
        dato = scanner.next();
        System.out.println("Cual es tu edad ");
        int edad = Integer.parseInt(dato);
        System.out.println("Tu edad es: " + edad);
    }
}
