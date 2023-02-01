const db = require('./db');
const { jsonError, sendStatus } = require('./status');
const errorCheck = require('./errorCheck');

function remove(app) {
  app.delete('/api/grades/:gradeId', (req, res, next) => {

    const sql = `
      DELETE
          FROM "grades"
        WHERE "gradeId" = $1
      RETURNING *
    ;
  `;

    const gradeId = Number(req.params.gradeId);
    const params = [gradeId];
    const course = null;
    const score = null;
    const name = null;

    errorCheck(gradeId, name ?? 'not required', course ?? 'not required', score ?? 'not required', req, res);

    if (!res.headersSent) {
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
    }

  });
}

module.exports = remove;
