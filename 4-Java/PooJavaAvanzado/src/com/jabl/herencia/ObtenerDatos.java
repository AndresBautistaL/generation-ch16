package com.jabl.herencia;

import java.util.Scanner;

public class ObtenerDatos {
    BasePadre nuevoPadre = new BasePadre();
    private Scanner sc = new Scanner(System.in);

    public void obtenDatos(){
        System.out.println("Ingrese valor de A: ");
        nuevoPadre.setA(sc.nextInt());

        System.out.println("Ingrese valor de B: ");
        nuevoPadre.setB(sc.nextDouble());

        System.out.println("Ingrese valor de C: ");
        nuevoPadre.setC(sc.next());
    }

    public String regresaDatos(){
        return String.valueOf(nuevoPadre.getA()) + " " + nuevoPadre.getB() + " " + nuevoPadre.getC();
    }
}
