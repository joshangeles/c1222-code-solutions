/* eslint-disable no-console */
const express = require('express');
const port = 3000;
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};
const app = express();

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const obj in grades) {
    gradeArray.push(grades[obj]);
  }
  res.json(gradeArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = req.params.id;
  if (grades[id]) {
    delete grades[id];
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
