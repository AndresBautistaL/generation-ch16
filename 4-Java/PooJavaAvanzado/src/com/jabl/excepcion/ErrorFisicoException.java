package com.jabl.excepcion;

public class ErrorFisicoException  extends Exception{
    public ErrorFisicoException(Exception ex) {
        super("\t\t\t <-- Ocurrio un error físico -->", ex);
    }
}
