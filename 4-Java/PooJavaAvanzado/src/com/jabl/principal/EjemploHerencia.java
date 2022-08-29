package com.jabl.principal;

import com.jabl.herencia.BasePadre;
import com.jabl.herencia.Hija;
import com.jabl.herencia.Hijo;
import com.jabl.herencia.ObtenerDatos;

public class EjemploHerencia {
    public static void main(String[] args) {
        ObtenerDatos nuevoObtenerDatos = new ObtenerDatos();
        Hija h = new Hija();
        Hijo ho = new Hijo();
        ho.setA(14689);
        /*nuevoObtenerDatos.obtenDatos();
        System.out.println(nuevoObtenerDatos.regresaDatos());*/
        h.visualizarA();
        ho.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(2357);

        //Obj miObj = new BasePadre();
        System.out.println("Atributo de la Clase Base Padre ->" + obj.getA());
        System.out.println("Atributo de Clase Hijo ->" + ho.getA());
    }
}
