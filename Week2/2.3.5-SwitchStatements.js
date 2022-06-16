// Correct these statements so they make sense
// Sunday = 0, Monday = 1, ... Saturday = 6
// re-assign day to any number from 0 - 7 to test the result
let day = 1;
let dayName = `Today`;

// Complete this switch case statement to produce the correct results please.

switch (day) {
  case 3:
    dayName = `Today is Wednesday`;
    break;
  case 1:
    dayName = `Today is Monday`;
    break;

  // Note the code blocks in the next 2 cases: Why?
  case 4: {
    let message = `Today is Thursday`;
    console.log(message);
    break;
  }
  case 5: {
    let message = `Tomorrow it's the weekend!`;
    console.log(message);
    break;
  }
  default:
    text = console.log(`It's a day of the week!`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  // write a case here for the weekend (how many days in the weekend?)
  case 6:
  case 7:
    alert(`It's the Weekend!`);

}
console.log(dayName);
