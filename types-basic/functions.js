"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// doesn't return anything!
function printResult(num) {
    console.log(num);
}
// printResult(add(5, 8));
// FUNCTION TYPE
// combineValues is a function type
// it MUST take two number params
// that MUST return a NUMBER
var combineValues;
combineValues = add;
// combineValues = printResult; // Gives error!
// cuz above func takes in only ONE param and returns nothing
// CALLBACK FUNCTION
// ===================================
// cb is a callback func passed in as argument
// cb takes in a num param, which HAS to be a number
// it returns nothing cuz of void
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
console.log(addAndHandle(5, 3, function (num) {
    return num;
}));
