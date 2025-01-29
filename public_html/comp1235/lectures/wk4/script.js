// Jvascript Objects
// Hoisting
// Destructing
// Break and Continue Statements
// Regular Expressions
// - *
// - repeat the previous character 0 or more times

// alert("Hello, World!");

// The continue, break statement
// let number = 0;
// while (true) {
//   number = parseInt(prompt("Enter a number from 1 to 10."));
//   if (isNaN(number) || number < 1 || number > 10) {
//     alert("Invalid input. Try again.");
//     continue;
//   } else {
//     break;
//   }
// }

// Regular Expressions
// []\()^&|*?{}+
// let pattern = /ran/;
// const testArr = ["ran", "run", "rnn", "rann"];
// let pattern = /ran/;

// testArr.forEach((item) => {
//   console.log(item, pattern.test(item));
// });

// a|b - a or b
// a* - 0 or more a's
// + - 1 or more
// ? - 0 or 1
// {n} - n times
// {n,} - n or more times
// {n, m} - n to m times
// (...) - group
// [ab-d] - a, b, c, d
// [^ab-d] - not a, b, c, d
// \d - digit
// \D - not digit
// \w - word character
// \W - not word character
// \s - whitespace
// ^ - start of string
// $ - end of string
// i - ignore case
// \n - new line
// \r - carriage return : On some Windows machies, you need both the newline and the carriage return to go to the next line.
// \t - tab
// \0 - null

// [A-Za-z] - all letters
// Eample of i
// let pattern2 = /ran/i;

// Regular Expressions Object Methods
// exec() - Returns the first match
// test() - Returns true or false
// toString() - Returns the string
// search() - Returns the index of the first match

// Exmaples:
let patt = /e/;
console.log(patt.test("The best things in life are free!")); // true
console.log(/e/.test("The best things in life are free!")); // true
console.log(/e/.exec("The best things in life are free!")); // ["e"]

let str = "Visit W3Schools";
let n = str.search(/w3schools/i);
console.log(n); // 6

let animal = "cat";
console.log(animal.charAt(1)); // a
console.log("cat".charAt(1)); // a

// Object constructor
const objName = new Object();

objName.name1 = "value1";
objName.name2 = "value2";

console.log(objName); // {name1: "value1", name2: "value2"}

// Hoisting
function caculateTotal(price, quantity) {
  let subtotal = price * quantity;
  return subtotal + caculateTax(subtotal);

  function caculateTax(subtotal) {
    return subtotal * 0.13;
  }
}

console.log(caculateTotal(10, 5)); // 65.0

let { value1, value2 } = { value1: 10, value2: 20 };
console.log(value1); // 10
