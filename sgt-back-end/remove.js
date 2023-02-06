const db = require('./db');
const { jsonError, sendStatus } = require('./status');
const { validate } = require('./validate');

const deleteGrade = (req, res) => {

  const sql = `
      DELETE
          FROM "grades"
        WHERE "gradeId" = $1
      RETURNING *
    ;
  `;

  const gradeId = Number(req.params.gradeId);
  const params = [gradeId];

  if (!(validate(gradeId, 'not required', 'not required', 'not required', res))) {
    return;
  }

  db.query(sql, params)
    .then((result) => {
      const grade = result.rows[0];
      !grade
        ? jsonError(res, 404, `Grade #${gradeId} not found!`)
        : sendStatus(res, 204);
    })
    .catch((err) => {
      console.error(err);
      jsonError(res, 500, 'An unexpected error occurred.');
    });

};

module.exports = deleteGrade;
