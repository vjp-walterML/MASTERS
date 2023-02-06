'use strict'

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_frutas) { /* ...nombre_variable, es un parametro REST, permite mandar por parametro un numero indefinido */
    console.log("Fruta1: " + fruta1);
    console.log("Fruta2: " + fruta2);
    console.log(resto_frutas); /* Los almacena en un array */
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");