"use strict";
// Look @ resultConversion param
// It's LITERAL typing instead of VALUE typing like 'number
// It can only be two types of string, no value else!
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
// u1 is type User with name and age
var u1 = { name: "Max", age: 30 }; // this works!
// BAD
// ======================
// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name);
// }
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// GOOD
// ======================
// User type used here!
// function greet(user: User) {
//   console.log("Hi, I am " + user.name);
// }
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }
