// PART - B
const ages = [1, 2];
const ages1 = [4, 5];
function calculateAge(agesArray) {
  const result = agesArray.reduce((acc, age) => {
    return acc + age;
  });
  return result;
}

//1. filter() => this method return few elements
//example 1: integers
const numbers = [1, 2, 3, 4, 5];
console.log("numbers", numbers);
//SYNTAX => varName.filter(function(){});
// let a = function(){};
// varNeme.filter(a);
const filter_num = numbers.filter((number) => {
  return number > 3;
});
console.log("filter_num", filter_num);
//example 2: strings
const names = ["John", "Doe", "Joosung", "Ahn"];
console.log("names", names);
const filter_names = names.filter((name) => {
  const first_char = name.charAt(0).toUpperCase();
  return first_char > "I";
});
console.log("filter_names", filter_names);

//2. reduce() => this method return one element
console.log("Before numbers", numbers);
const reduce_num = numbers.reduce((acc, number) => {
  return acc + number;
});
console.log("reduce_num", reduce_num);
// reduce example 2: string
const sentence = "I studied at GBC college";
console.log("sentence", sentence.split(" "));
const filter_string = sentence.split(" ").reduce((acc, word) => {
  return acc + word.charAt(0);
}, "");
console.log("filter_string", filter_string);

//3. map() => this method return all elements
const numbers4 = [1, 2, 3, 4, 5];
const map_num = numbers4.map((num) => num * 2);
console.log("map_num", map_num);
