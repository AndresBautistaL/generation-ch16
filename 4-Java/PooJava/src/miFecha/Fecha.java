package miFecha;

import java.util.Scanner;

public class Fecha{
    private int dia;
    private int mes;
    private int anio;

    private Scanner sc = new Scanner(System.in);


    public Fecha() {
    /*    this.dia = dia;
        this.mes = mes;
        this.anio = anio;*/
    }

    public String formatoF(int dia, int mes, int anio){
        String cadenaDia = Integer.toString(dia);
        String cadenaMes = Integer.toString(mes);
        String cadenaAnio = Integer.toString(anio);
        return cadenaDia + "/" + cadenaMes + "/" + cadenaAnio;
    }

    public String formatoF2(){
        System.out.println("Ingrese el día");
        dia = sc.nextInt();
        String cadenaDia = Integer.toString(dia);
        System.out.println("Ingrese el mes sin 0 al inicio");
        mes = sc.nextInt();
        String cadenaMes = Integer.toString(mes);
        System.out.println("Ingrese el año");
        anio = sc.nextInt();
        String cadenaAnio = Integer.toString(anio);
        return "La fecha que ingresó es " + cadenaDia + "/" + cadenaMes + "/" + cadenaAnio;
    }

    public int getDia(){
        return dia;
    }

    public int getMes(){
        return mes;
    }

    public int getAnio(){
        return anio;
    }

    public void setDia(int nuevoDia){
            dia = nuevoDia;
    }

    public void setMes(int nuevoMes){
        mes = nuevoMes;
    }

    public void setAnio(int nuevoAnio){
        anio = nuevoAnio;
    }

}
