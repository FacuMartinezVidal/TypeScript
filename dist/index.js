"use strict";
//INTRODUCCION
function add(n1, n2, showResult, result) {
    var operation = n1 + n2;
    if (showResult) {
        console.log(result + operation);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 2;
var number2 = 4;
var printResult = true;
var phrase = "result is";
var result = add(number1, number2, printResult, phrase);
console.log(result);
