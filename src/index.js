require("dotenv").config();
const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const { MESSAGES } = require("./constants/constants");

// Initialize Express
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Mount the task routes
app.use("/tasks", taskRoutes);

// Basic health check
app.get("/", (req, res) => {
  res.json({
    response: MESSAGES.API_RUNNING,
    error: null,
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
