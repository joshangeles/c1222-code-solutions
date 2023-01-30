function deleteNote(app) {
  const fs = require('fs');
  const data = require('./data.json');
  let dataJSON = null;
  app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    switch (true) {
      case ((id < 1 || isNaN(id) || id % 1 !== 0)):
        res.status(400).json({ error: 'id must be a positive integer' });
        break;
      case data.notes[id] !== undefined:
        delete data.notes[id];
        dataJSON = JSON.stringify(data, null, 2);
        fs.writeFile('data.json', dataJSON, (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'An unexpected error occurred.' });
          } else {
            res.sendStatus(204);
          }
        });
        break;
      case data.notes[id] === undefined:
        res.status(404).json({ error: `cannot find note with id ${id}` });
    }
  });
}

module.exports = deleteNote;
