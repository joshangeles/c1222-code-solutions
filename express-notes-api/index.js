/* eslint-disable no-console */
const getList = require('./getList');

const express = require('express');
const port = 3000;
const app = express();
const expressJSON = express.json();
app.use(expressJSON);

getList(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
