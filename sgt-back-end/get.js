const db = require('./db');
const { json, jsonError } = require('./status');
const { validate } = require('./validate');

function get(app) {
  app.get('/api/grades', (req, res) => {
    const sql = `
    SELECT *
      FROM "grades"
      ORDER BY "gradeId" ASC
    ;
  `;
    db.query(sql)
      .then((result) => {
        const grade = result.rows;
        json(res, 200, grade);
      })
      .catch((err) => {
        console.error(err);
        jsonError(res, 500, 'An unexpected error occurred.');
      });
  });

  app.get('/api/grades/:gradeId', (req, res) => {

    const sql = `
    SELECT *
      FROM "grades"
     WHERE "gradeId" = $1
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
        if (!grade) {
          jsonError(res, 400, `Grade #${gradeId} not found!`);
        } else {
          json(res, 200, grade);
        }
      })
      .catch((err) => {
        console.error(err);
        jsonError(res, 500, 'An unexpected error occurred.');
      });
  });
}

module.exports = get;
