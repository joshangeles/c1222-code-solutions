const db = require('./db');
const { json, jsonError } = require('./status');
const { validate } = require('./validate');

const updateGrade = (req, res) => {

  const sql = `
      UPDATE grades
        SET "name" = $1,
            "course" = $2,
            "score" = $3
          WHERE "gradeId" = $4
        RETURNING *
    ;
  `;

  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  const gradeId = Number(req.params.gradeId);
  const params = [name, course, score, gradeId];

  validate(gradeId, name, course, score, res);
  if (!res.headersSent) {
    db.query(sql, params)
      .then((result) => {
        const grade = result.rows[0];
        !grade
          ? jsonError(res, 404, `Grade #${gradeId} not found!`)
          : json(res, 200, grade);
      })
      .catch((err) => {
        console.error(err);
        jsonError(res, 500, 'An unexpected error occurred.');
      });
  }
};

module.exports = updateGrade;
