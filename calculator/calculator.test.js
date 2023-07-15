import calculator from "./calculator";

// add tests
test('add two numbers', () => {
  expect(calculator.add(1, 9)).toBe(10);
});

test('add two floats', () => {
  expect(calculator.add(1.4, 4.3)).toBeCloseTo(5.7);
});


// subtract tests
test('subtract two numbers', () => {
  expect(calculator.subtract(1, 9)).toBe(-8);
});

test('subtract two floats', () => {
  expect(calculator.subtract(4.3, 1.4)).toBeCloseTo(2.9);
});

test('subtract two negatives', () => {
  expect(calculator.subtract(-3, -12)).toBe(9);
});

// divide tests
test('divide two positives', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('divide with a negative', () => {
  expect(calculator.divide(5, -2)).toBeCloseTo(-2.5);
});

test('divide by zero', () => {
  expect(calculator.divide(10, 0)).toBe("cannot divide by zero");
});

// multiply tests
test('multiply two numbers', () => {
  expect(calculator.multiply(-4, 6)).toBe(-24);
});

test('multiply two floats', () => {
  expect(calculator.multiply(4, 2.3)).toBeCloseTo(9.2);
});

test('multiply with a zero', () => {
  expect(calculator.multiply(0, 16)).toBe(0);
});