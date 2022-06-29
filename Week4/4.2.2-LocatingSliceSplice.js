const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"

let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");

// find the last index of "a", "b", and "c"

let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c");

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

function removeDuplicates (arrParam, dupVal) {
    let firstIndex = arrParam.indexOf(dupVal);
    let lastIndex = arrParam.lastIndexOf(dupVal);
    while (firstIndex ==! lastIndex) {
        arrParam.splice(lastIndex, 1);
        lastIndex = arrParam.lastIndexOf(dupVal);
    }
    return arrParam;
}
console.log(removeDuplicates(arr, "a"));