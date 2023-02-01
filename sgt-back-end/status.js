/* eslint-disable no-undef */
function jsonError(result, status, message) {
  result.status(status).json({ error: message });
}

function json(result, status, data) {
  result.status(status).json(data);
}

function sendStatus(result, status) {
  result.sendStatus(status);
}

module.exports = { json, jsonError, sendStatus };
