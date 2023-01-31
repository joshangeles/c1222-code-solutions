let data = require('./data.json');
const fs = require('fs');

function update(id, updatedNote) {
  if (data.notes[id] === undefined) {
    console.log('\x1b[36m%s\x1b[0m', `Entry #${id} not found! Does this note exist?`);
    return;
  }
  data.notes[id] = updatedNote;
  data = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', data, 'utf-8', err => {
    if (err) throw err;
  });
}

module.exports = update;
