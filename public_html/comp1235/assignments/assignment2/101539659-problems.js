"use strict";

function _findNumOfDigits(arg) {
  let count = 0;
  let string = arg.toString();
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      count++;
    }
  }
  return count;
}

function _surplus(surplusStr) {
  return function inner() {
    return surplusStr;
  };
}

function _strNumbers(array) {
  const numInStr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].match(/\d/)) {
      numInStr.push(array[i]);
    }
  }
  return numInStr;
}

function _determineClassGrading(array) {
  let pass = 0;
  let fail = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 50) {
      pass++;
    } else {
      fail++;
    }
    sum += array[i];
  }
  return [pass, fail, parseFloat((sum / array.length).toFixed(1))];
}

function _moveCapitalLetters(str) {
  let upper = "";
  let lower = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      upper += str[i];
    } else {
      lower += str[i];
    }
  }
  return upper + lower;
}
