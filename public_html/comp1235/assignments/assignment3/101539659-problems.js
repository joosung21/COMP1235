"use strict";

function Circle(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.round(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  };
  this.perimeter = function () {
    return Math.round(2 * Math.PI * this.radius * 100) / 100;
  };
}

const calculateSalary = (array) => {
  return array.reduce((acc, curr, index) => {
    const isWeekend = index > 4;
    const baseRate = isWeekend ? 20 : 10;
    const overtimeRate = isWeekend ? 30 : 15;

    return (
      acc +
      (curr > 8 ? 8 * baseRate + (curr - 8) * overtimeRate : curr * baseRate)
    );
  }, 0);
};

const indexMultiplier = (array) => {
  return array.reduce((acc, curr, index) => acc + curr * index, 0);
};

const filteredJSON = (array) => {
  return array.filter(({ id, u }) => id > 10 && /^[M-Z]/i.test(u.trim()));
};

const breakAway = function (array, n) {
  return array.reduce((acc, _, i) => {
    if (i % n === 0) acc.push(array.slice(i, i + n));
    return acc;
  }, []);
};
