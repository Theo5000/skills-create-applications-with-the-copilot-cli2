// Calculator module
// Supported operations:
// - Addition: add(a, b, ...rest) — adds two or more numbers
// - Subtraction: subtract(a, b, ...rest) — subtracts numbers sequentially (a - b - c ...)
// - Multiplication: multiply(a, b, ...rest) — multiplies two or more numbers
// - Division: divide(a, b, ...rest) — divides numbers sequentially (a / b / c ...), with division-by-zero handling
// - Modulo: modulo(a, b) — remainder of a divided by b
// - Exponentiation: power(base, exponent) — base raised to the exponent
// - Square root: squareRoot(n) — returns sqrt(n), errors for negative inputs

/**
 * Ensure all inputs are numbers; throws TypeError if parsing fails.
 * Accepts array of strings or numbers.
 */
function ensureNumbers(inputs) {
  if (!Array.isArray(inputs) || inputs.length === 0) {
    throw new Error('No numbers provided');
  }
  const nums = inputs.map((v, i) => {
    const n = typeof v === 'number' ? v : Number(v);
    if (!Number.isFinite(n)) throw new TypeError(`Invalid number at position ${i + 1}: ${v}`);
    return n;
  });
  return nums;
}

function add(...args) {
  const nums = ensureNumbers(args);
  return nums.reduce((s, n) => s + n, 0);
}

function subtract(...args) {
  const nums = ensureNumbers(args);
  return nums.slice(1).reduce((acc, n) => acc - n, nums[0]);
}

function multiply(...args) {
  const nums = ensureNumbers(args);
  return nums.reduce((p, n) => p * n, 1);
}

function divide(...args) {
  const nums = ensureNumbers(args);
  return nums.slice(1).reduce((acc, n, idx) => {
    if (n === 0) {
      throw new Error(`Division by zero at operand position ${idx + 2}`);
    }
    return acc / n;
  }, nums[0]);
}

// Returns the remainder of a divided by b
function modulo(a, b) {
  const [x, y] = ensureNumbers([a, b]);
  if (y === 0) throw new Error('Modulo by zero');
  return x % y;
}

// Returns base raised to the exponent
function power(base, exponent) {
  const [b, e] = ensureNumbers([base, exponent]);
  return Math.pow(b, e);
}

// Returns the square root of n; errors for negative inputs
function squareRoot(n) {
  const [x] = ensureNumbers([n]);
  if (x < 0) throw new Error('Square root of negative number');
  return Math.sqrt(x);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
