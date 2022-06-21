/*
  3.1.7-ArrowSyntax#index.js
  ===========================
*/

// refactor the Function Declarations below into arrow syntax

// Function Declaration ...
// function myNumberFunction() {
//   return ((2 ** 2 + 3) %4) * 14;
// }

// Arrow Function
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

console.log("myNumberFunction = ", myNumberFunction());

// Function Declaration ...
// function greet(name) {
//   return `Hello, ${name}`;
// }

// Arrow Function
const greet = name => `Hello, ${name}.`;

console.log(greet('Bob'));

// Function Declaration ...
// const timeOfDayGreet = function(name, timeOfDay) {
//   return `Hello, ${name}, good ${timeOfDay}!`;
// };

// Arrow Function
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, great ${timeOfDay}!`;

console.log(timeOfDayGreet("Peet", "Evening"));


// Function Declaration ...
// function tripleAndHalf(num) {
//   let triple = num * 3;
//   return triple / 2;
// }

// Arrow Function
const tripleAndHalf = (num) => {
    let triple = num * 3;
    return triple / 2;
}

console.log("tripleAndHalf = ", tripleAndHalf(7));


// Function Declaration ...
// function sumTwoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   console.log(`The sum of your numbers is ${sum}.`);
//   return sum;
// }

// Arrow Function
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  return `The sum of your numbers is ${sum}.`;
}

console.log(sumTwoNumbers(3, 8));