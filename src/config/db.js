const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../tasks.db');

// Create and open the SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to SQLite database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create the tasks table if it doesn't exist
const createTaskTable = `
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT CHECK(status IN ('TO_DO','IN_PROGRESS','DONE')) NOT NULL
);
`;

db.run(createTaskTable, (err) => {
  if (err) {
    console.error('Error creating tasks table:', err.message);
  } else {
    console.log('Tasks table ready or already exists.');
  }
});

module.exports = db;
