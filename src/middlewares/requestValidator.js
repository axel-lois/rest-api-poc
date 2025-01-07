/**
 * requestValidator.js
 *
 * Middleware to validate payload for /tasks requests.
 * - For POST /tasks, ensure `title`, `description`, and `status` exist and are valid.
 * - For DELETE /tasks/:id, we might check if :id is numeric, etc.
 */

const ERRORS = require("../constants/errors");

const { VALID_STATUSES } = require("../constants/constants");

function validateTaskPayload(req, res, next) {
  // This will only validate POST body
  // If you want to validate for other methods, you can adapt or create separate middlewares
  const { title, description, status } = req.body;

  if (!title) {
    return res.status(400).json({
      response: null,
      error: ERRORS.FIELD_TITLE_REQUIRED,
    });
  }

  if (!description) {
    return res.status(400).json({
      response: null,
      error: ERRORS.FIELD_DESCRIPTION_REQUIRED,
    });
  }

  if (!status || !VALID_STATUSES.includes(status)) {
    return res.status(400).json({
      response: null,
      error:
        ERRORS.DESCRIPTION_FIELD_DOMAIN_RESTRICTION,
    });
  }

  next();
}


// used for delete endpoint
function validateTaskIdParam(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({
      response: null,
      error: ERRORS.FIELD_ID_INVALID
    });
  }
  next();
}


module.exports = {
  validateTaskPayload,
  validateTaskIdParam
};
