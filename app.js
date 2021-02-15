var add = function (n1, n2, showResults) {
    return showResults ? console.log(n1 + n2) : n1 + n2;
};
var num1 = "3";
var num2 = 9;
var printResult = true;
console.log(add(+num1, +num2, printResult));
