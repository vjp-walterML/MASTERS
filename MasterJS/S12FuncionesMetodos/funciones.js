'use strict'

// Funciones
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

function calculadora(n1, n2, mostrar = false) {
    console.log("Hola soy la calculadora");
    //return "Hola soy la calculadora";
    if (mostrar == false) {
        console.log("Suma: " + (n1 + n2));
        console.log("Resta: " + (n1 - n2));
        console.log("Multiplicacion: " + (n1 * n2));
    } else {
        document.write("Suma: " + (n1 + n2) + "<br/>");
        document.write("Resta: " + (n1 - n2) + "<br/>");
        document.write("Multiplicacion: " + (n1 * n2) + "<br/>");
        document.write("*************************************<br/>");

    }

}

calculadora(1, 2, true);
