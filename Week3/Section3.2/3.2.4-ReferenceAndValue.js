/*
  3.2.4-ReferenceAndValue#index.js
  =================================
*/

// comparing and passing by reference and value
// determine whether each log will print true or false

console.log("4 === 4 :", 4 === 4);
console.log("Hello, world" === "Hello, world");

let x = false;
let y = x;
console.log("\n 1st comparison of x = y... ", x === y);

x = !x;
console.log("\n 2nd comparison of x = y... ", x === y);

console.log("\n Comparing like arrays... ", [1, 2, "c"] === [1, 2, "c"]);

console.log("\n Comparing empty objects... ", {} === {});

y = { id: 1 };
x = y;
console.log("\n3rd comparison - id's of x and y... ", x === y);

y.id += 1;
console.log("4th comparison - id's of x and y after mutation... ", x.id === y.id);