const express = require('express');
const port = 3000;
const grades = {};
const app = express();
let nextId = 1;
const expressJSON = express.json();
app.use(expressJSON);

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const key in grades) {
    gradeArray.push(grades[key]);
  }
  res.json(gradeArray);
});

app.post('/api/grades', (req, res) => {
  if (req.body.score && req.body.course && req.body.name) {
    req.body.id = nextId;
    grades[nextId] = req.body;
    nextId++;
    res.status(201).json(req.body);
  } else {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
