const create = require('./create');
const read = require('./read');
const update = require('./update');
const del = require('./delete');
const passedArgs = process.argv;
const note = passedArgs[3];
const id = passedArgs[3];
const updatedNote = passedArgs[4];

switch (passedArgs[2]) {
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
