const db = require('./db');
const { json, jsonError } = require('./status');
const errorCheck = require('./errorCheck');

function post(app) {
  app.post('/api/grades', (req, res, next) => {

    const sql = `
      INSERT INTO "grades" ("name", "course", "score")
      VALUES ($1, $2, $3)
      RETURNING *
    ;
  `;

    const name = req.body.name;
    const course = req.body.course;
    const score = Number(req.body.score);
    const params = [name, course, score];
    let gradeId;

    errorCheck(gradeId ?? 'not required', name, course, score, req, res);

    if (!res.headersSent) {
      db.query(sql, params)
        .then((result) => {
          const grade = result.rows[0];
          json(res, 201, grade);
        })
        .catch((err) => {
          console.error(err);
          jsonError(res, 500, 'An unexpected error occurred.');
        });
    }

  });
}

module.exports = post;
