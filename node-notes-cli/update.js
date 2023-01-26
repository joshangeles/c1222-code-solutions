const data = require('./data.json');
const fs = require('fs');

function update(id, updatedNote) {
  data.notes[id] = updatedNote;
  let updatedData = data;
  updatedData = JSON.stringify(updatedData, null, 2);
  fs.writeFile('data.json', updatedData, 'utf-8', err => {
    if (err) throw err;
  });
}

module.exports = update;
