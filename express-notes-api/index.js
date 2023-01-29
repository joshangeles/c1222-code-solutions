/* eslint-disable no-console */
const getList = require('./getList');
const getId = require('./getId');

const express = require('express');
const port = 3000;
const app = express();
const expressJSON = express.json();
app.use(expressJSON);

getList(app);
getId(app);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
