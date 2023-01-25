const fs = require('fs');
const writeFileButBetter = (data, encoder) => {
  fs.writeFile(process.argv[3], data, encoder, err => {
    if (err) throw err;
  });
};

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  try {
    writeFileButBetter('');
  } catch (error) {
    throw err;
  }
  writeFileButBetter(data, 'utf8');
});
