function postNote(app) {
  const data = require('./data.json');
  const fs = require('fs');
  let dataJSON = null;
  app.post('/api/notes', (req, res) => {
    switch (true) {
      case req.body.content === undefined:
        res.status(400).json({ error: 'content is a required field' });
        break;
      case req.body instanceof Object:
        req.body.id = data.nextId;
        data.notes[data.nextId] = req.body;
        data.nextId++;
        dataJSON = JSON.stringify(data, null, 2);
        fs.writeFile('data.json', dataJSON, { flag: 'r+' }, (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'An unexpected error occurred.' });
          } else {
            res.status(201).json(req.body);
          }
        });
    }
  });
}

module.exports = postNote;
