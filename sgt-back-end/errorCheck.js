const { jsonError } = require('./status');

const errorCheck = (gradeId, name, course, score, req, res) => {
  switch (true) {
    case ((!Number.isInteger(gradeId) || gradeId <= 0) && !(gradeId === 'not required')):
      jsonError(res, 400, 'gradeId must be a positive integer');
      break;

    case !name:
      jsonError(res, 400, 'name is a required field');
      break;

    case !course:
      jsonError(res, 400, 'course is a required field');
      break;

    case !score && score !== 0:
      jsonError(res, 400, 'score is a required field');
      break;

    case Number.isInteger(score):
      if (score < 0 || score > 100) {
        jsonError(res, 400, 'score must be between 0 and 100');
      }
      break;

    case !Number.isInteger(score) && !(score === 'not required'):
      jsonError(res, 400, 'score must be an integer');
      break;
  }
};

module.exports = errorCheck;
