const add = (n1: number, n2: number, showResults: boolean) => {
  return showResults ? console.log(n1 + n2) : n1 + n2;
};

const num1 = "3";
const num2 = 9;
const printResult = true;

console.log(add(+num1, +num2, printResult));
