const fs = require('fs');
const data = require('./data.json');
const updateNote = (req, res) => {
  let dataJSON = null;
  const id = Number(req.params.id);
  switch (true) {
    case ((id < 1 || isNaN(id) || id % 1 !== 0)):
      res.status(400).json({ error: 'id must be a positive integer' });
      break;

    case req.body.content === undefined:
      res.status(400).json({ error: 'content is a required field' });
      break;

    case ((id < 1 || isNaN(id) || id % 1 === 0) && req.body.content !== undefined):
      if (data.notes[id] === undefined) {
        res.status(404).json({ error: `cannot find note with id ${id}` });
        break;
      } else {
        data.notes[id].content = req.body.content;
        dataJSON = JSON.stringify(data, null, 2);
        fs.writeFile('data.json', dataJSON, 'utf-8', (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'An unexpected error occurred.' });
          } else {
            res.status(200).json(req.body);
          }
        });
        break;
      }
  }
};

module.exports = updateNote;
