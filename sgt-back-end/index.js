const express = require('express');
const port = 3000;
const app = express();
const { getList, getId } = require('./get');
const post = require('./post');
const updateGrade = require('./put');
const deleteGrade = require('./remove');

app.use(express.json());

app.get('/api/grades', getList);
app.get('/api/grades/:gradeId', getId);
app.post('api/grades/', post);
app.put('api/grades/:gradeId', updateGrade);
app.delete('/api/grades/:gradeId', deleteGrade);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
