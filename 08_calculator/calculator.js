const add = function (num_a, num_b) {
  let final = num_a + num_b;
  return final;
};

const subtract = function (num_a, num_b) {
  let final = num_a - num_b;
  return final;
};

const sum = function (arr) {
  total = 0
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i]);
  }

  return total;
};

const multiply = function (arr) {
  total = arr[0]
  for (let i = 1; i < arr.length; i++) {
    total *= Number(arr[i]);
  }

  return total;
};

const power = function (num_a, num_b) {
  return Math.pow(num_a, num_b);
};

const factorial = function (num) {
  if (num === 0) { return 1; }
  else { return num * factorial(num - 1); }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
