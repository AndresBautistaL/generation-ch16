package miEjemploJava;

import java.util.Scanner;

public class Persona {
    private String nombre = "Andrés";
    private int edad = 26;
    private int nss = 12345;

    private Scanner sc = new Scanner(System.in);
    private String obtenNombre;
    private int obtenEdad;
    private int obtenNss;

    public void caminar (){
        System.out.println("Caminando");
    }

    public void dormir(){
        System.out.println("Mimiendo");
    }

    public void obtenerDatos(){
        System.out.println("Ingrese su nombre");
        obtenNombre =  sc.next();
        System.out.println("Ingrese su edad");
        obtenEdad = sc.nextInt();
        System.out.println("Ingrese su nss");
        obtenNss = sc.nextInt();
        System.out.println("Tu nombre es " + obtenNombre + " tienes " + obtenEdad + " años y tu nss es " + obtenNss);
    }
    //String nombre, int edad, int nss
    public Persona() {
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;
    }

    public String getNombre(){
        return nombre;
    }

    public int getEdad(){
        return edad;
    }

    public int getNss(){
        return nss;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public void setEdad(int edad){
        this.edad = edad;
    }

    public void setNss(int nss){
        this.nss = nss;
    }
}
