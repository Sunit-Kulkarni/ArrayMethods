/*jslint devel: true */

var array = [5, 6, 23, 7, 4, -2, 0, -9, -2];

function extractPositive(arrayOfNumbers) {
    "use strict";
    return arrayOfNumbers.filter(function (number) {
        return number > 0;
    });
}

function extractEven(arrayOfNumbers) {
    "use strict";
    return arrayOfNumbers.filter(function (number) {
        return number % 2 === 0;
    });
}

function squareTheNumbers(arrayOfNumbers) {
    "use strict";
    return arrayOfNumbers.map(function (number) {
        return number * number;
    });
}

var square = squareTheNumbers(array);

console.log(square);

//console.log(EvenArray);