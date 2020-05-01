//alcance de las funciones: https://platzi.com/clases/1339-fundamentos-javascript/12890-el-alcance-de-las-funcion-8/

var nombre = "Sacha";

function imprimirNombreEnMayusculas(n) {
  n = n.toUpperCase();
  console.log(n);
}

imprimirNombreEnMayusculas(nombre);
