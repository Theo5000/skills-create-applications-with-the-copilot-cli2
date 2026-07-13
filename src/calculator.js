// Calculator module
// Supported operations:
// - Addition: add(a, b, ...rest) — adds two or more numbers
// - Subtraction: subtract(a, b, ...rest) — subtracts numbers sequentially (a - b - c ...)
// - Multiplication: multiply(a, b, ...rest) — multiplies two or more numbers
// - Division: divide(a, b, ...rest) — divides numbers sequentially (a / b / c ...), with division-by-zero handling

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

module.exports = { add, subtract, multiply, divide };
