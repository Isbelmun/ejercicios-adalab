//Modulo 1 - Ejercicio 1 - parte 1 - Años bisiestos

var currentYear = 2017;
var targetYear = 2050-1;
var timeFrame = targetYear - currentYear;
var leapInterval = 4;

var result = (timeFrame - (timeFrame % leapInterval)) / leapInterval;

console.log('Habrá ' + result + ' años bisiestos antes de ' + (targetYear + 1));
