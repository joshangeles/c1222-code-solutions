const data = require('./data.json');
const fs = require('fs');

function del(id) {
  delete data.notes[id];
  let updatedData = data;
  updatedData = JSON.stringify(updatedData, null, 2);
  fs.writeFile('data.json', updatedData, 'utf-8', err => {
    if (err) throw err;
  });
}

module.exports = del;
