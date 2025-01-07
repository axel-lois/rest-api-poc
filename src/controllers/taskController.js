const taskService = require("../services/taskService");

/**
 * GET /tasks
 */
async function getTasks(req, res) {
  const tasks = await taskService.listAllTasks();
  return tasks; // The responseFormatter middleware will wrap this as {response: tasks, error: null}
}

/**
 * POST /tasks
 */
async function createTask(req, res) {
  const { title, description, status } = req.body;
  const newTask = await taskService.addTask({ title, description, status });
  return newTask;
}

/**
 * DELETE /tasks/:id
 */
async function deleteTask(req, res) {
  const { id } = req.params;
  const changes = await taskService.removeTask(id);

  if (changes === 0) {
    // If no rows were deleted, throw an error to be handled by formatResponse
    res.status(404);
    throw new Error(`Task with ID ${id} not found`);
  }

  return { message: `Task with ID ${id} deleted successfully` };
}

async function updateTask(req, res) {
  const { id } = req.params;
  const { status, description } = req.body;
  const changes = await taskService.updateTask(status, description, id);

  if (changes === 0) {
    res.status(400);
    throw new Error(`Task with ID ${id} not found`);
  }

  return { message: `Task with ID ${id} updated successfully` };
}

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
