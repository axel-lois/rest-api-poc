const taskModel = require("../models/taskModel");
const ERRORS = require("../constants/errors");

async function listAllTasks() {
  const tasks = await taskModel.getAllTasks();
  return tasks;
}

async function addTask({ title, description, status }) {
  const newTask = await taskModel.createTask({ title, description, status });
  return newTask;
}

async function removeTask(id) {
  // First check if the task exists
  const existingTask = await taskModel.getTaskById(id);
  if (!existingTask) {
    // Throw an error that references our errors constant
    throw new Error(ERRORS.TASK_NOT_FOUND);
  }

  // Task exists, so now delete
  const changes = await taskModel.deleteTaskById(id);
  return changes; 
}

async function updateTask(status, description, id) {
  // First check if the task exists
  const existingTask = await taskModel.getTaskById(id);
  if (!existingTask) {
    // Throw an error that references our errors constant
    throw new Error(ERRORS.TASK_NOT_FOUND);
  }

  // Method from model to update task.
  const changes = await taskModel.updateTask(status, description, id);

  return changes
}

module.exports = {
  listAllTasks,
  addTask,
  removeTask,
  updateTask,
};
