#!/usr/bin/env node
// CLI entry for the Node.js calculator
// Supports operations: add, sub, mul, div (see src/calculator.js for behavior)

const { add, subtract, multiply, divide } = require('./calculator');

function usage() {
  console.error(`Usage:
  calc <operation> <num1> <num2> [...numN]

Operations:
  add   (alias: +)  - add two or more numbers
  sub   (alias: -)  - subtract numbers sequentially
  mul   (alias: *)  - multiply two or more numbers
  div   (alias: /)  - divide numbers sequentially (division by zero is an error)

Examples:
  calc add 1 2 3
  calc mul 2 3
  calc div 10 2
`);
}

function parseOperation(opToken) {
  switch ((opToken || '').toLowerCase()) {
    case 'add':
    case '+':
      return 'add';
    case 'sub':
    case 'subtract':
    case '-':
      return 'sub';
    case 'mul':
    case 'multiply':
    case '*':
      return 'mul';
    case 'div':
    case 'divide':
    case '/':
      return 'div';
    default:
      return null;
  }
}

async function main(argv) {
  const args = argv.slice(2);
  if (args.length < 2) {
    usage();
    process.exit(1);
  }

  const opToken = args[0];
  const op = parseOperation(opToken);
  if (!op) {
    console.error(`Unknown operation: ${opToken}\n`);
    usage();
    process.exit(1);
  }

  const numberArgs = args.slice(1);
  try {
    let result;
    switch (op) {
      case 'add':
        result = add(...numberArgs);
        break;
      case 'sub':
        result = subtract(...numberArgs);
        break;
      case 'mul':
        result = multiply(...numberArgs);
        break;
      case 'div':
        result = divide(...numberArgs);
        break;
    }

    // Print result in a succinct manner
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(2);
  }
}

if (require.main === module) {
  main(process.argv);
}
