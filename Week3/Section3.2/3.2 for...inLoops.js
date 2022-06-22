/*
  3.2 - for...in loops  ========================
*/

// Example 1: Iterate Through an Object
console.log("EXAMPLE #1");

const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

// Example 2: Iterate Through another Object
console.log("\nEXAMPLE #2");

const student = {
name: 'Monica',
class: 7,
age: 12,
gender: 'girl'
}

// using for...in
for ( let key in student ) {
// display the properties
console.log(`${key} => ${student[key]}`);
}

// name => Monica
// class => 7
// age => 12
// gender => girl