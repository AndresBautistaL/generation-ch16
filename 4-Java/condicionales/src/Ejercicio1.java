import java.util.Arrays;

public class Ejercicio1 {
    public static void main(String[] args) {


    /*
            Problema 1
            La salida tiene que ser la siguiente:
            *
            **
            ***
            ****
            *****
    */
     String estrellitas = " ";

    for (int i=0; i <5; i++){
        //for (int j=0; j<5; j++){
            System.out.println(estrellitas);
            estrellitas += "*";
       }
    //}

    /*
            Problema 2
            *****
            ****
            ***
            **
            *
*/
        String[] estrellitas2 = {"*", "*", "*", "*", "*"};

        /*for (int i = estrellitas2.length - 1; i >= 0; i--) {
            for (int j = estrellitas2.length - 1; j > 0; j--) {
                System.out.println(estrellitas2);
                estrellitas2[j] = " ";
            }
        }
    /*
            Problema 3
            Pedirle al usuario la cantidad de estrellitas y la direccion
        */

    }

}