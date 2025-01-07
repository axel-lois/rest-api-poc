# Task Management API

A simple RESTful API that allows users to manage tasks using **SQLite** as a local database.  
Each task has the following attributes:

- **title** (string)
- **description** (string)
- **status** (one of `"TO_DO"`, `"IN_PROGRESS"`, `"DONE"`)

## Table of Contents

1. [Features](#features)
2. [Folder Structure](#folder-structure)
3. [Requirements](#requirements)
4. [Installation & Setup](#installation--setup)
5. [Running the Application](#running-the-application)

---

## Features

- **Create** a new task.
- **List** all tasks.
- **Delete** an existing task by its ID.
- **Middleware** that validates request payload and standardizes responses.
- **Local SQLite** database (`tasks.db`) file for storage.

---

## Requirements

- **Node.js** (version 14+ recommended)
- **npm** (or **yarn**)
- **SQLite** is handled via the `sqlite3` package; no separate install is needed.

---

## Installation & Setup

1. **Clone or download this repository**.

   ```bash
   git clone https://github.com/axel-lois/my-tasks-api.git
   cd my-tasks-api
   ```

2. **Install dependencies**.

   ```bash
   npm install
   ```

3. **(Optional) Create a .env file in the project root for environment variables:**

   ```bash
   PORT=3000
   ```

---

### Running the application

1. **Development mode (with auto-restart):**.

   ```bash
   npm run dev
   ```

2. **Production mode**.

   ```bash
   npm start
   ```

The server will start on http://localhost:3000 (or on the port specified in .env).