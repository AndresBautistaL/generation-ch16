import java.util.ArrayList;
import java.util.List;

public class Colecciones3 {
    public static void main(String[] args) {
        //int -> Integer
        //char -> Character
        //float -> Float
        //double -> Double

        System.out.println("ArrayList");
        List<String> comidas = new ArrayList<String>();
        comidas.add("Pozole");
        comidas.add("Tostadas");
        comidas.add("Ceviche");
        comidas.add(2, "Esquite");

        System.out.println(comidas);

        System.out.println("----------");
        System.out.println();
    }
}
