const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	let total = 0;
  if (arr.length == 0) {
    return 0
  } else if (arr.length == 1) {
    return arr[0]
  }
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  }
  let total = 1;
  for (let i = 2; i <= a; i++) {
    total *= i;
  }
  return total;
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
