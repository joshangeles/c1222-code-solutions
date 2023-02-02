/* eslint-disable no-console */
const data = require('./data.json');
const getList = (req, res) => {
  const notes = [];
  for (const key in data.notes) {
    notes.push(data.notes[key]);
  }
  res.status(200).json(notes);
};

module.exports = getList;
