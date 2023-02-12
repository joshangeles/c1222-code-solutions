const path = require('node:path');
const express = require('express');

const port = 3000;
const app = express();

const publicPath = path.join(__dirname, 'public');

const staticFn = express.static(publicPath);

app.use(staticFn);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
