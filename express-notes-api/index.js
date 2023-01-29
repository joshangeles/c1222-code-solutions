/* eslint-disable no-console */
const getList = require('./getList');
const getId = require('./getId');
const postNote = require('./postNote');
const deleteNote = require('./deleteNote');
const updateNote = require('./updateNote');
const express = require('express');
const port = 3000;
const app = express();
const expressJSON = express.json();
app.use(expressJSON);

getList(app);
getId(app);
postNote(app);
deleteNote(app);
updateNote(app);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
