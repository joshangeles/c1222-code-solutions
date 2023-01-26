const fs = require('fs');
let cat = '';

for (let i = 2; i < process.argv.length; i++) {
  const currentFile = process.argv[i];
  fs.readFile(currentFile, 'utf8', (err, data) => {
    if (err) {
      console.log('File not found!');

    } else {
      cat += ('\n' + data);
    }
    if (i === (process.argv.length - 1)) {
      console.log(cat);
    }
  });
}
