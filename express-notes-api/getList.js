/* eslint-disable no-console */
function getList(app) {
  const data = require('./data.json');
  app.get('/api/notes', (req, res) => {
    const notes = [];
    for (const key in data.notes) {
      notes.push(data.notes[key]);
    }
    res.status(200).json(notes);
  });
}

module.exports = getList;
