/* eslint-disable no-console */
const express = require('express');
const app = express();

app.use(function (req, res) {
  console.log(req.method);
  res.send('Hey guys did you know that...');
});

const port = 3000;
const color = '\x1b[36m';
const reset = '\x1b[0m';
app.listen(port, () => {
  console.log(`Server is listening at port: ${color + port + reset}`);
});
