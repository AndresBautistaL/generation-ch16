package com.jabl.h_abstracta;

public class Circulo extends FigurasGeometricas{
    private float    radio;
    @Override
    public float area(){
        return Math.PI * Math.pow(radio, 2);
    }

    public Circulo(){}

    public Circulo(float radio){
        this.radio = radio;
    }

    public float getRadio(){
        return radio;

    }
}
