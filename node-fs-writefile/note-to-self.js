const fs = require('fs');
const note = process.argv[2] + '\n';
const writeFileButBetter = (data, encoder) => {
  fs.writeFile('note.txt', data, encoder, err => {
    if (err) throw err;
  });
};

fs.readFile('note.txt', 'utf8', (err, data) => {
  try {
    writeFileButBetter('');
  } catch (error) {
    throw err;
  }

  switch (data) {
    case undefined:
      writeFileButBetter(note, 'utf8');
      break;
    default:
      writeFileButBetter(data + note, 'utf8');
  }
});
