const assert = require('assert');
const { add, subtract, multiply, divide } = require('../src/calculator');

// Addition
assert.strictEqual(add(1, 2, 3), 6);
assert.strictEqual(add('4', '5'), 9);

// Subtraction
assert.strictEqual(subtract(10, 1, 2), 7);
assert.strictEqual(subtract('5', '2'), 3);

// Multiplication
assert.strictEqual(multiply(2, 3, 4), 24);
assert.strictEqual(multiply('3', '3'), 9);

// Division
assert.strictEqual(divide(20, 2, 2), 5);
assert.strictEqual(divide('9', '3'), 3);

// Division by zero should throw
assert.throws(() => divide(1, 0), /Division by zero/);

console.log('All tests passed');
