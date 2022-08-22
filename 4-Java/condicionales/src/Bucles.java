import java.util.Objects;
import java.util.Scanner;

public class Bucles {
    public static void main(String[] args) {
        //System.out.println("Bucles");
        for (int i = 0; i<10; i++){
            System.out.println(i);
        }

//while
//bucle no controlado
//la condicion se debe de modificar dentro del while
//La condición se debe de modificar dentro del while

//Mientras la condicion sea true

String condicion = "";
Scanner sc = new Scanner(System.in);
// == != estamos comparando datos primitivos
//mientras la condición sea truw
while(! Objects.equals(condicion, "Hola")){
    System.out.println("Saludame");
    condicion = sc.next();
}


//El do while es igual al while
        //el do while ejecuta la accion aunque sea una vez

        do{
            System.out.println("Saludame x2");
            condicion = sc.next();
        }while (!Objects.equals(condicion, "Hola"));
    }
}
