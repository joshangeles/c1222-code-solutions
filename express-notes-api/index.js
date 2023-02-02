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

app.get('/api/notes', getList);
app.get('/api/notes/:id', getId);
app.post('/api/notes', postNote);
app.delete('/api/notes/:id', deleteNote);
app.put('api/notes/:id', updateNote);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
