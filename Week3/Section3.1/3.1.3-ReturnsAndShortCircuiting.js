/*
  3.1.3-ReturnsAndShortCircuiting#index.js
  =========================================
*/

// ? what does the function below return?
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  return num;
}
 // myNumberFunction();


// change the function above to return a value


//  Change the return statement to...
// return console.log(num);


// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
  console.log(
    "This will never print because it is after the return statement."
  );
}
 // shortCircuitFunction();

//  Now try uncommenting the next line
// console.log(shortCircuitFunction());


// ? will the following function short circuit?
let height = 33;
function checkCircusRides() {
  if (height < 48) {
    return "Take a ride on the carousel!";
  }
  if (height < 60) {
    return "Try the bumper cars!";
  }
  return "Enjoy the roller coaster!";
};
checkCircusRides();
console.log(checkCircusRides());

// change the function above to use short circuiting

// To short circuit, add a Return before any one of the IF statements, or the console.log