/*
  3.2.2-MorePracticeWithObjects#index.js
  ========================================
*/

// bracket and dot notation
//-------------------------

const key = "1";

const obj = {
  key: "the key is 'key'",
  1: "the key is 1"
};

// what will the following lines print?
 console.log(obj[key]);
 console.log(obj["key"]);
 console.log(obj["1"]);


/*
Create an object with at least four properties, each with a different data type

Name one of the four properties "collection" and set its value to an Array or Object
*/

const something = {
  veggies: "broccoli, spinach, squash",
  meat: false,
  snacks: 3,
  numbers: [31, 22, 13],
  collection: [
    {love: "Yourself", hate: "No one", like: "What you do", work: "Hard"},
    {green: "tree", red: "apple", blue: "Baju", yellow: "Jacket"},
    {1: "one", 3: "three", 5: "five", 7: "seven", 11: "eleven"},
    {small: "hut", medium: "condo", large: "house"}
  ],
  
};

// access a value in in "collection" property
console.log("\nAlways love ", something.collection[0].love + "\n");


// Nested Arrays and Objects
//---------------------------
const arrKeys = ["key", "1", "method", "favorites", "list"];

const newObj = {
  key: "the key is 'key'",
  1: "the key is 1"
};

// add a method to newObj
newObj.method = function() {
  return "the key is 'method' and its call refers to a function";
};

// add a favorites key and valus to newObj
// fill in your favorite movie, number and color below
newObj["favorites"] = {
  movie: "The Shining",
  number: 19,
  color: "gray"
};

// add an array to newObj
newObj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];


/*
How many lines will the following for...of statement print?
What do you expect to see on each line?
*/

for (let element of arrKeys) {
  console.log(`The key is: ${element}, and value is: ${newObj[element]}`);
}

// use a template literal to print a sentence about your favorite movie and color
console.log(
  `\nMy favorite movie is ${newObj.favorites.movie}, and my favorite color is ${newObj.favorites.color}.`
);

// access the values "b", 4, and 6 from obj.list

console.log("\nWe access the values b,4,6 in newObj as follows...");

console.log("List [1] = ", newObj.list[1]);

console.log("List [4][1] =", newObj.list[4][1]);

console.log("List [5].f = ", newObj.list[newObj.list.length - 1].f);