const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const summation = array.reduce((total, num) => (total + num), 0)
  return summation;
};

const multiply = function(array) {
  const multiplication = array.reduce((total, num) => (total * num), 1)
  return multiplication;
};

const power = function(base, power) {
	let result = 1;
  for (let i = 0; i < power; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(a) {
	if (a === 0) return 1;
  for (let i = a - 1; i > 1; i--) {
      a *= i;
  }
  return a
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
