'use strict';

var numero_entero = 23;
var cadena_texto = "Cadena de texto";
var boolean = true;
/* FUNCIONES */
Number(numero_falso); //Para convertir cualquier tipo de dato a tipo number

parseInt(); //Para convertir String en numero entero

parseFloat(); //Para convertir String en float

String();//Para convertir cualquier variable en String

var numero_falso = "23";
console.log(typeof numero_falso);
console.log(typeof Number(numero_falso));


//FOR

for(var i = 1 ; i<=10 ; i++){
    console.log(i);
    //'debugger;'   sentencia para iniciar un debugger y ver el control de flujo del script, interesante.
}