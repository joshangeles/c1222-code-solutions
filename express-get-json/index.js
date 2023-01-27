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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const obj in grades) {
    gradeArray.push(grades[obj]);
  }
  res.json(gradeArray);
});
