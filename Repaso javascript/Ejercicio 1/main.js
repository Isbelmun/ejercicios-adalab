// Ejercicio 1

// Creamos una función que tomará como parámetros un número y un array de números.
// La función va a devolver el número de veces que está repetido ese número en el array.
// Por ejemplo, si le pasamos un 1 y [1,3,4,2,1,3,4,5],  la función devolverá un 2,
// porque el número 1 aparece dos veces en el array.


var number = 1;
var arrayNumbers = [1,3,4,2,1,3,4,5];
var total = 0;

function numberCount (number, arrayNumbers) {
  for ( var i = 0; i<arrayNumbers.length; i++) {
    if (arrayNumbers[i] === number) {
      total = total + 1;
    }
  }
  return total;
}
console.log('El número se repite ' + numberCount (number, arrayNumbers) + ' veces');
