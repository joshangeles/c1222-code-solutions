const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

switch (process.argv[3]) {
  case 'plus':
    add.add(process.argv[2], process.argv[4]);
    break;
  case 'minus':
    subtract.subtract(process.argv[2], process.argv[4]);
    break;
  case 'times':
    multiply.multiply(process.argv[2], process.argv[4]);
    break;
  case 'over':
    divide.divide(process.argv[2], process.argv[4]);
    break;
}
