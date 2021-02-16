// ======================================
// CREATING NEW TYPES
// ======================================
// add type where var, let, const goes.
// you can use this type in function.
type Combinable = number | string;
type ConversionDescriptior = "as-number" | "as-text";

// Look @ resultConversion param
// It's LITERAL typing instead of VALUE typing like 'number
// It can only be two types of string, no value else!
function combine(
  input1: number | string,
  input2: Combinable,
  resultConversion: ConversionDescriptior
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

// ======================================
// TYPE ALIASES W/ OBJECT TYPES
// ======================================
// Create a new object type called user
type User = { name: string; age: number };
// u1 is type User with name and age
const u1: User = { name: "Max", age: 30 }; // this works!

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
