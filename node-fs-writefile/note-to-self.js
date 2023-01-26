const fs = require('fs');
const note = process.argv[2] + '\n';

fs.appendFile('note.txt', note, err => {
  if (err) throw err;
});
