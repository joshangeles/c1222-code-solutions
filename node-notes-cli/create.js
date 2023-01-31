const data = require('./data.json');
const fs = require('fs');

function create(note) {
  data.notes[data.nextId++] = note;
  let updatedData = data;
  updatedData = JSON.stringify(updatedData, null, 2);
  fs.writeFile('data.json', updatedData, 'utf-8', err => {
    if (err) throw err;
  });
}

module.exports = create;
