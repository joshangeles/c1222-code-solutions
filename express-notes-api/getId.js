/* eslint-disable no-console */
const data = require('./data.json');
const getId = (req, res) => {
  const id = Number(req.params.id);
  switch (true) {
    case ((id < 1 || isNaN(id) || id % 1 !== 0)):
      res.status(400).json({ error: 'id must be a positive integer' });
      break;
    case data.notes[id] !== undefined:
      res.status(200).json(data.notes[id]);
      break;
    case data.notes[id] === undefined:
      res.status(404).json({ error: `cannot find note with id ${id}` });
      break;
  }
};

module.exports = getId;
