package MetPrincipal;
import MenuP.MenuOP;
import ejemplosResumen.Animal;
import miEjemploJava.Persona;
import miFecha.Fecha;
import miSaludo.Saludo;
import java.util.Scanner;

public class EjecutaT {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MenuOP menuOP = new MenuOP();
        int op;


        do {
            menuOP.menu();
            System.out.println("Elija una opcion: ");
            op = sc.nextInt();

            switch (op) {
                case 1:
                    Saludo s = new Saludo();
                    s.nuevoSaludo();
                    break;
                case 2:
                    Persona p = new Persona();
                    p.obtenerDatos();
                    break;
                case 3:
                    Fecha f = new Fecha();
                    System.out.println(f.formatoF2());
                    break;
                case 4:
                    Animal a = new Animal();
                    System.out.println(a.datosAnimal());
                    break;
                case 0:
                    System.out.println("Fin del programa, adiós");
                    break;
                default:
                    System.out.println("Opción no válida");
            }
        }while (op != 0);

    }
}
