'use strict';

var pais = "España";
var continente = "Europa";

document.write("-------------ESCRITO CON JS--------<br><br>");
document.write(pais);
document.write(continente);
document.write("<br><br>-------------FIN-------------");


/* PRUEBAS LET Y VAR */

var numero = 10;
console.log(numero);//10

if(true){
    numero = 23;
    console.log(numero);//23
}

console.log(numero);//23

numero = 10;
console.log(numero);//10

if(true){
    let numero = 23;
    console.log(numero);//23
}

console.log(numero);//10