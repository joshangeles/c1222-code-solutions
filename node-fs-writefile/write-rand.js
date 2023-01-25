const fs = require('fs');
const randomNumber = Math.random() + '\n';
const writeFileButBetter = (data, encoder) => {
  fs.writeFile('random.txt', data, encoder, err => {
    if (err) throw err;
  });
};

fs.readFile('random.txt', 'utf8', (err, data) => {
  try {
    writeFileButBetter('');
  } catch (error) {
    throw err;
  }

  switch (data) {
    case undefined:
      writeFileButBetter(randomNumber, 'utf8');
      break;
    default:
      writeFileButBetter(data + randomNumber, 'utf8');
  }
});
