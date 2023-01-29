function getId(app) {
  const fs = require('fs');
  let model = null;
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) console.log('Error!');
    model = JSON.parse(data);
  });
  app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    switch (true) {
      case ((id < 1 || isNaN(id) || id % 1 !== 0)):
        res.status(400).json({ error: 'id must be a positive integer' });
        break;
      case model.notes[id] !== undefined:
        res.status(200).json(model.notes[id]);
        break;
    }
  });
}

module.exports = getId;
