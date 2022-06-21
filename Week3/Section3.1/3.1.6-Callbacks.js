/*
  3.1.6-Callbacks#index.js
  =========================
*/

// pass each "regular" function into getAndShowMessage as a callback function

// "regular" functions...
function greet(name) {
    return `Hello ${name}!`;
  }
  
  function welcome(name) {
    return `${name}, welcome!`;
  }
  
  function informAboutSale(name) {
    return `${name}, we're having a sale!`;
  }
  
  // function that takes a callback function as an argument
  function getNameAndShowMessage(callTheFunction) {
    const name = prompt("Please Enter Your Name: ");
    return(callTheFunction(name));
  }
  
  // Now pass each "regular" function into getNameAndShowMessage function as a callback function like so...
  
  // console.log(getNameAndShowMessage(greet));
  
  // console.log(getNameAndShowMessage(welcome));
  
  // console.log(getNameAndShowMessage(informAboutSale));
