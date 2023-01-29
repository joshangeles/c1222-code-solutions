/* eslint-disable no-console */
function getList(app) {
  const model = require('./data.json');
  app.get('/api/notes', (req, res) => {
    const notes = [];
    for (const key in model.notes) {
      notes.push(model.notes[key]);
    }
    res.status(200).json(notes);
  });
}

module.exports = getList;
