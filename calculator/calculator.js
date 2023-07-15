function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  if (num2 === 0) return "cannot divide by zero";
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

const calculator = {
  add,
  subtract,
  divide,
  multiply
}

export default calculator;