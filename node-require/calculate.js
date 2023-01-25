const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');
let storedResult = null;
let MDoffset = null;
const logMessage = () => {
  console.log(`Result: ${storedResult}`);
};

//  node  calculate.js  2   times  2  plus  2
//   0        1         2     3     4     5    6

let x = Number(process.argv[2]);
let y = Number(process.argv[4]);

for (let i = 3; i < process.argv.length; i += 2) {
  switch (process.argv[i]) {
    case 'plus':
      storedResult += add(x, y);
      x = 0;
      y = Number(process.argv[i + 3]);
      break;

    case 'minus':
      storedResult += subtract(x, y);
      x = 0;
      y = Number(process.argv[i + 3]);
      break;

    case 'times':
      x = 1;
      storedResult *= multiply(x, y);
      y = Number(process.argv[i + 3]);
      MDoffset++;
      break;

    case 'over':
      storedResult /= divide(y, x);
      x = 0;
      y = Number(process.argv[i + 3]);
      MDoffset++;
      break;
  }
}

storedResult -= MDoffset;
logMessage();
