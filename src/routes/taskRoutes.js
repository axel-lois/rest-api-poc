const express = require('express');
const taskController = require('../controllers/taskController');
const { validateTaskPayload, validateTaskIdParam } = require('../middlewares/requestValidator');
const { formatResponse } = require('../middlewares/responseFormatter');

const router = express.Router();

// GET /tasks
router.get('/', formatResponse(taskController.getTasks));

// POST /tasks
router.post('/', validateTaskPayload, formatResponse(taskController.createTask));

// DELETE /tasks/:id
router.delete('/:id', validateTaskIdParam, formatResponse(taskController.deleteTask));

router.put('/:id', validateTaskIdParam, formatResponse(taskController.updateTask));

module.exports = router;
