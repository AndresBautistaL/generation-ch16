package ejemplosResumen;

import java.util.Scanner;

public class Animal {
    private String raza;
    private String nombre;
    private int edad;

    private Scanner sc = new Scanner(System.in);


    public Animal() {

    }

    public String datosAnimal(){
        System.out.println("Ingrese el nombre del Animal");
        nombre = sc.next();
        System.out.println("Ingrese la edad de " + nombre);
        edad = sc.nextInt();
        String stringEdad = Integer.toString(edad);
        System.out.println("Ingrese la raza de " + nombre);
        raza = sc.next();
        return nombre + " Es un animal de la raza " + raza + " y tiene " + edad + " años";

    }

    public int getEdad(){
        return edad;
    }

    public void setEdad(int nuevaEdad){
        edad = nuevaEdad;
    }

    public String getNombre(){
        return nombre;
    }
}