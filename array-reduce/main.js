const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 },
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' },
];

const sum = numbers.reduce((previousNumber, currentNumber) => previousNumber + currentNumber);
const product = numbers.reduce((previousNumber, currentNumber) => previousNumber * currentNumber);
const balance = account.reduce((currentBalance, account) => {
  switch (account.type) {
    case 'withdrawal':
      currentBalance -= account.amount;
      break;

    case 'deposit':
      currentBalance += account.amount;
      break;
  }
  return currentBalance;
}, 0);
const composite = traits.reduce((compositeObject, key) => Object.assign(compositeObject, key), {});
