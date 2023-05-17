function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function makeInt(string) {
  return parseInt(string, 10);
}

function preserveDecimal(string) {
  return parseFloat(string);
}

function increment(n) {
  return n + 1;
}

function decrement(n) {
  return n - 1;
}

let number = 5;

number++; //=> 5... hmmmm

number; //=> 6 -- the number was incremented after it was evaluated

number--; //=> 6

number; //=> 5