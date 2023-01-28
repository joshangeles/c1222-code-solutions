/* eslint-disable no-console */
function getList(app) {
  const fs = require('fs');
  let notes = null;
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) console.log('Error!');
    notes = JSON.parse(data);
  });
  app.get('/api/notes', (req, res) => {
    res.status(200).json(notes);
  });
}

module.exports = getList;
