const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let return1 = nums.pop(); // 0
let return2 = nums.pop(); // 1
// remove each of the first two items with shift(), saving each item to a variable
let return3 = nums.shift(); // 6
let return4 = nums.shift(); // 5

console.log(nums); // nums = [2,3,4]

// use push and unshift to add the variables back to the array in numerical order, 0-6

nums.push(return4,return3); // [2,3,4,5]
nums.unshift(return2);
nums.unshift(return1);       // [1,2,3,4,5,6]

console.log(nums); // [0,1,2,3,4,5,6]