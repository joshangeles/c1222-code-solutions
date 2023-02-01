const db = require('./db');
const { json, jsonError } = require('./status');

function get(app) {
  app.get('/api/grades', (req, res, next) => {
    const sql = `
    SELECT *
      FROM "grades"
      ORDER BY "gradeId" ASC
    ;
  `;
    db.query(sql)
      .then((result) => {
        const grade = result.rows;
        json(200, grade);
      })
      .catch((err) => {
        console.error(err);
        jsonError(res, 500, 'An unexpected error occurred.');
      });
  });
}

module.exports = get;
