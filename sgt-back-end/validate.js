const { jsonError } = require('./status');

const validate = (gradeId, name, course, score, res) => {
  switch (true) {
    case ((!Number.isInteger(gradeId) || gradeId <= 0) && !(gradeId === 'not required')):
      jsonError(res, 400, 'gradeId must be a positive integer');
      return false;

    case !name:
      jsonError(res, 400, 'name is a required field');
      return false;

    case !course:
      jsonError(res, 400, 'course is a required field');
      return false;

    case !score && score !== 0:
      jsonError(res, 400, 'score is a required field');
      return false;

    case Number.isInteger(score):
      if (score < 0 || score > 100) {
        jsonError(res, 400, 'score must be between 0 and 100');
      }
      return false;

    case !Number.isInteger(score) && !(score === 'not required'):
      jsonError(res, 400, 'score must be an integer');
      return false;
  }
  return true;
};

module.exports = { validate };
