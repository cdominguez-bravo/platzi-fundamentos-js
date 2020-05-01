var nombre = "Carlos";
var apellido = "Lifzyc";

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();
var primeraLetraDelNombre = nombre.charAt(0);

var cantidadDeLetasDelNombre = nombre.length;

//interpolacion de texto

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

var str = nombre.substr(1, 2);

// https://platzi.com/clases/1339-fundamentos-javascript/12888-variables-numer-8/

var edad = 27;
edad += 1;

var peso = 75;

peso -= 2;

var sandwich = 1;

sandwich = peso + sandwich;

var jugarAfutbol = 3;

peso -= jugarAfutbol;

var precioDeVino = 200.3;

var total = Math.round(precioDeVino * 100 * 3) / 100;

var totalStr = total.toFixed(3);

var total2 = parseFloat(totalStr);

var pizza = 8;
var persona = 2;
var cantidadDePorcionesPorPersna = pizza / persona;
