public class EjemploSaludo {
    public static void main(String[] args) {
        Saludo objSaludo;//declarar el objeto
        objSaludo = new Saludo();//crear el objeto con new
        objSaludo.Saludar();//llamando al método

        Saludo objSaludo1 = new Saludo();

        System.out.println(objSaludo.saludar1());

        System.out.println("Este es otro objeto: -> " + objSaludo1.saludar1());
    }
}
