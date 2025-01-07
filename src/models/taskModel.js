const db = require("../config/db");

function getAllTasks() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM tasks";
    db.all(sql, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function createTask({ title, description, status }) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)`;
    db.run(sql, [title, description, status], function (err) {
      if (err) return reject(err);
      // Return the newly created task
      resolve({
        id: this.lastID,
        title,
        description,
        status,
      });
    });
  });
}

function deleteTaskById(id) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM tasks WHERE id = ?`;
    db.run(sql, [id], function (err) {
      if (err) return reject(err);
      // 'this.changes' indicates how many rows were affected
      resolve(this.changes);
    });
  });
}

function updateTask(status, description, id) {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE tasks SET status = ? AND description = ? WHERE id = ?`;
    db.run(sql, [status, description, id], function (err) {
      if (err) return reject(err);
      resolve(this.changes);
    });
  });
}

function getTaskById(id) {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM tasks WHERE id = ?";
    db.get(sql, [id], (err, row) => {
      if (err) return reject(err);
      resolve(row); // row will be undefined if no task is found
    });
  });
}

module.exports = {
  getAllTasks,
  createTask,
  deleteTaskById,
  getTaskById,
  updateTask,
};
