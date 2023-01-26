const fs = require('fs');
const randomNumber = Math.random() + '\n';

fs.appendFile('random.txt', randomNumber, err => {
  if (err) throw err;
});
