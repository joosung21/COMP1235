"use strict";

// function1: find the number of digits in a argument
function _findNumOfDigits(arg) {
    return (arg.toString().match(/\d/g) || []).length;
}

// function2: surplus function
function _surplus(str) {
    return function() {
        return str;
    }
}

// function3: strings with numbers
function _strNumbers(array) {
    return array.filter(str => /\d/.test(str));
}

// function4: class grading
function _determineClassGrading(array) {
    let passing = array.filter(grade => grade >= 50).length;
    let failing = array.length - passing;
    let average = (array.reduce((sum, grade) => sum + grade, 0) / array.length) || 0;
    return [passing, failing, parseFloat(average.toFixed(1))];
}

// function5: move capital letters
const _moveCapitalLetters = (str) => {
    let upper = str.match(/[A-Z]/g) || [];
    let lower = str.match(/[a-z]/g) || [];
    return upper.join("") + lower.join("");
}
