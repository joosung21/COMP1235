//1. One d, Two d array => []
const oned = [1, 2, 3];
console.log("1-D", oned);
const twod = [
  ["A", "B"], //0
  [5, 6], //1
  ["C", "D"], //2
];
console.log("2-D", twod);
//number of elements on array => length
console.log("Number of 1-D", oned.length);
console.log("Number of 2nd element in 2-D", twod[1].length);
//2. Scope of variable in function
let a = 5; // global variable
function outer(name) {
  console.log("Outer function: " + a);
  console.log("Outer function: " + name);
  function inner() {
    let b = 10; // local variable
    console.log("Inner function: " + a);
    console.log("Inner function: " + b); // local variable
    console.log("Inner function: " + name); // global variable
  }
  // console.log("Inner function: " + b); // Undefined, not working
  inner();
}
outer("Joosung");
//3. EXAMPLE
//SYNTAX=> class ClassName{}
// name, address, city
// pass the parameters/args => constructor(){}
class Customer {
  constructor(name, address, city) {
    this.name = name;
    this.address = address;
    this.city = city;
  }
}
//need to create instance => new
let cust1 = new Customer("Joosung", "123 Main St", "Toronto");
let cust2 = new Customer("John", "456 Main St", "Toronto");
console.log("Customer 1: ", cust1);
console.log("Customer 2: ", cust2);
//4. CALLBACK FUNCTION
function SumAndAvg(numbers, callback) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let avg = sum / numbers.length;
  let product = sum * avg;
  callback(sum, avg, product);
}
function display(sum, avg, product) {
  console.log("Sum: " + sum);
  console.log("Average: " + avg);
  console.log("Product: " + product);
}
SumAndAvg([1, 2], display);
SumAndAvg([5, 5], display);
//5. JSON
const person = {
  name: "Joosung",
  address: "123 Main St",
  city: "Toronto",
};
//convert json into stsring => JSON.stringify()
let conv_str = JSON.stringify(person);
console.log("Converted String2: ", conv_str);
