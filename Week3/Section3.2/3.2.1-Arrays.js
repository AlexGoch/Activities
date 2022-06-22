/*
  3.2.1-Arrays#index.js
  ======================
*/

// create an Array using an Array literal
let x = 5;
let y = "hello";

const something = [x, y, 4, "green", true, false, null, [9, 0, 9, 8, 5], ["this", "that"], {"name": "Fred"}, 900, [], [true]];


// access the 1st item in the Array

 console.log("somethin[0] = ", something[0]);

// access the last item in the Array

console.log("something[12] = ", something[12]);


// print the length of the Array

console.log("Something length = ", something.length);

// use the length property to access the last item in the Array

console.log("Element @ length-1 = ", something[something.length - 1]);


// with for...of, loop over the Array, modify the value and add to a different Array

let a = 5;
let b = 235;
const green = 2**2+3;

let z;        // empty variable
let q = [];   // empty array

const somethingElse = [a, b, 4, green, 1, 0, 900, (2**8%3)];

for (let element of somethingElse) {
  let newElement = element + 1;
  //console.log(newElement);
  
  z += " " + newElement;
  // z assigned itself + newElement
  // here we concatenate all the new elements into a string
  
  q[element] = newElement;
  //  Array q filled with values (newElement) at index position (element)
};

console.log("\nThis is string z ----> ", z);

console.log("\nThis is array q ====>> ", q);