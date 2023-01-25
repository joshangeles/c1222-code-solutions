const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const x = Number(process.argv[2]);
const y = Number(process.argv[4]);

switch (process.argv[3]) {
  case 'plus':
    add(x, y);
    break;
  case 'minus':
    subtract(x, y);
    break;
  case 'times':
    multiply(x, y);
    break;
  case 'over':
    divide(x, y);
    break;
}
