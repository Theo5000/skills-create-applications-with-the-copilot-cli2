const { expect } = require('chai');
const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator - basic operations', () => {
  describe('Addition', () => {
    it('adds integers (2 + 3 => 5)', () => {
      expect(add(2, 3)).to.equal(5);
    });

    it('adds multiple operands (1 + 2 + 3 => 6)', () => {
      expect(add(1, 2, 3)).to.equal(6);
    });

    it('parses numeric strings', () => {
      expect(add('4', '5')).to.equal(9);
    });
  });

  describe('Subtraction', () => {
    it('subtracts integers (10 - 4 => 6)', () => {
      expect(subtract(10, 4)).to.equal(6);
    });

    it('subtracts sequentially (10 - 3 - 2 => 5)', () => {
      expect(subtract(10, 3, 2)).to.equal(5);
    });

    it('parses numeric strings', () => {
      expect(subtract('5', '2')).to.equal(3);
    });
  });

  describe('Multiplication', () => {
    it('multiplies integers (45 * 2 => 90)', () => {
      expect(multiply(45, 2)).to.equal(90);
    });

    it('multiplies multiple operands (2 * 3 * 4 => 24)', () => {
      expect(multiply(2, 3, 4)).to.equal(24);
    });

    it('parses numeric strings', () => {
      expect(multiply('3', '3')).to.equal(9);
    });
  });

  describe('Division', () => {
    it('divides integers (20 / 5 => 4)', () => {
      expect(divide(20, 5)).to.equal(4);
    });

    it('divides sequentially (100 / 2 / 5 => 10)', () => {
      expect(divide(100, 2, 5)).to.equal(10);
    });

    it('parses numeric strings', () => {
      expect(divide('9', '3')).to.equal(3);
    });

    it('throws on division by zero', () => {
      expect(() => divide(1, 0)).to.throw(/Division by zero/);
    });
  });

  describe('Input validation', () => {
    it('throws if no inputs provided', () => {
      expect(() => add()).to.throw(/No numbers provided/);
    });

    it('throws on invalid numeric input', () => {
      expect(() => add(1, 'a')).to.throw(/Invalid number/);
    });
  });
});

// Tests for extended operations: modulo, power, squareRoot
describe('Calculator - extended operations', () => {
  describe('Modulo', () => {
    it('computes remainder (5 % 2 => 1)', () => {
      expect(modulo(5, 2)).to.equal(1);
    });

    it('works with negative numbers (5 % -2 => 1 or language-defined)', () => {
      // JS % preserves sign of dividend: 5 % -2 === 1
      expect(modulo(5, -2)).to.equal(1);
    });

    it('throws on modulo by zero', () => {
      expect(() => modulo(1, 0)).to.throw(/Modulo by zero/);
    });
  });

  describe('Power (exponentiation)', () => {
    it('computes powers (2 ^ 3 => 8)', () => {
      expect(power(2, 3)).to.equal(8);
    });

    it('computes fractional exponents', () => {
      expect(power(9, 0.5)).to.be.closeTo(3, 1e-12);
    });

    it('parses numeric strings', () => {
      expect(power('2', '4')).to.equal(16);
    });
  });

  describe('Square root', () => {
    it('computes sqrt(16) => 4', () => {
      expect(squareRoot(16)).to.equal(4);
    });

    it('computes sqrt(2) approximately', () => {
      expect(squareRoot(2)).to.be.closeTo(Math.sqrt(2), 1e-12);
    });

    it('throws on negative input', () => {
      expect(() => squareRoot(-1)).to.throw(/Square root of negative number/);
    });
  });
});
