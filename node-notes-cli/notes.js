const create = require('./create');
const read = require('./read');
const update = require('./update');
const del = require('./delete');
const passedArgs = process.argv;
const command = passedArgs[2];
const note = passedArgs[3];
const id = passedArgs[3];
const updatedNote = passedArgs[4];

switch (command) {
  case 'create':
    create(note);
    break;

  case 'read':
    read();
    break;

  case 'update':
    update(id, updatedNote);
    break;

  case 'delete':
    del(id);
    break;
}
