/* eslint-disable no-console */
function getId(app) {
  const model = require('./data.json');
  app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    switch (true) {
      case ((id < 1 || isNaN(id) || id % 1 !== 0)):
        res.status(400).json({ error: 'id must be a positive integer' });
        break;
      case model.notes[id] !== undefined:
        res.status(200).json(model.notes[id]);
        break;
      case model.notes[id] === undefined:
        res.status(404).json({ error: `cannot find note with id ${id}` });
    }
  });
}

module.exports = getId;
