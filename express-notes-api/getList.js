/* eslint-disable no-console */
function getList(app) {
  const fs = require('fs');
  let model = null;
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) console.log('Error!');
    model = JSON.parse(data);
  });
  app.get('/api/notes', (req, res) => {
    const notes = [];
    for (const key in model.notes) {
      notes.push(model.notes[key]);
    }
    res.status(200).json(notes);
  });
}

module.exports = getList;
