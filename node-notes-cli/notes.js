/* eslint-disable no-unused-vars */
const create = require('./create');
const read = require('./read');
const update = require('./update');
const del = require('./delete');
const note = process.argv[3];

switch (process.argv[2]) {
  case 'create':
    create(note);
    break;
  case 'read':
    read();
    break;

  case 'update':

    break;

  case 'delete':

    break;
}
