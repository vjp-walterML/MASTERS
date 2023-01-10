'use strict';

/* Programa que pida dos numeros y que nos diga cual es el mayoR, el menor y si son iguales. Si los numeros no son un numero o son menores o iguales a 0 que vuelva a pedir los datos. */


var numero1 = prompt("Por favor, introduzca el primer número: ", 0);
var numero2 = prompt("Por favor, introduzca el segundo número: ", 0);

while (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
    alert("ERROR, POR FAVOR INTRODUZCA VALORES CORRECTOS.");
    numero1 = prompt("Por favor, introduzca el primer número: ", 0);
    numero2 = prompt("Por favor, introduzca el segundo número: ", 0);
}

if (numero1 >= numero2) {
    alert("El primer número(" + numero1 + ") " + "es MAYOR al segundo(" + numero2 + ").");
} else {
    if (numero1 <= numero2) {
        alert("El primer número(" + numero1 + ") " + "es MENOR al segundo(" + numero2 + ").");
    } else {
        alert("El primer número(" + numero1 + ") " + "es IGUAL al segundo(" + numero2 + ").");
    }
}