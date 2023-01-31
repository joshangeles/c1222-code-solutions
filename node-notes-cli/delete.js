let data = require('./data.json');
const fs = require('fs');

function del(id) {
  if (data.notes[id] === undefined) {
    console.log('\x1b[36m%s\x1b[0m', `Entry #${id} not found! Does this note exist?`);
    return;
  }
  delete data.notes[id];
  data = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', data, 'utf-8', err => {
    if (err) throw err;
  });
}

module.exports = del;
