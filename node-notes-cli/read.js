const data = require('./data.json');
function read() {
  for (const note in data.notes) {
    console.log(`${note}: ${data.notes[note]}`);
  }
}

module.exports = read;
