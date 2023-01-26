const data = require('./data.json');

function create(note) {
  const newNote = null;
  newNote.notes[data.nextId] = note;
  console.log(newNote);
}

module.exports = create;
