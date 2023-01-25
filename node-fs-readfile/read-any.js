const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.log('File not found!');
    return;
  }
  console.log(data);
});
