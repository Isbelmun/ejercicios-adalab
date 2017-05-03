/* Modulo 1 - Ejercicio 1 - parte 2
Cuántas cartas con número par y negras hay en una baraja de poker*/

var pairPokerCards = 20;
var suitsOfDeck = 4;
var blackSuits = suitsOfDeck / 2;

var result = (pairPokerCards / suitsOfDeck) * blackSuits;

console.log('Habrá ' + result + ' cartas con número par y negras en una baraja de póker');
