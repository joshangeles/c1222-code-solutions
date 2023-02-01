const express = require('express');
const port = 3000;
const app = express();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./remove');

app.use(express.json());

get(app);
post(app);
put(app);
remove(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
