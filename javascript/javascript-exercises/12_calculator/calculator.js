const add = function(a,b) {
	return(a + b);
};

const subtract = function(a,b) {
  return (a - b);
};

const sum = function(arr) {
  sum = 0;
	for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum

  //return arr.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product*current, 0)
};

const power = function() {
	return (Math.pow(a,b))
};

const factorial = function(int) {
  sum = 1;
  for (let i = 0; i < int; i++) {
    sum *= i
  }
  return sum
	
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
