const data = require('./data.json');
const fs = require('fs');

function del(id) {
  if (data.notes[id] === undefined) {
    console.log('\x1b[36m%s\x1b[0m', `Entry #${id} not found! Does this note exist?`);
    return;
  }
  delete data.notes[id];
  let updatedData = data;
  updatedData = JSON.stringify(updatedData, null, 2);
  fs.writeFile('data.json', updatedData, 'utf-8', err => {
    if (err) throw err;
  });
}

module.exports = del;
