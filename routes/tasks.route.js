const express = require("express");
const router = express.Router();

const tasksController = require("../controller/tasks.controller");

router.post("/create-task/:id", tasksController.createTask);
router.delete("/delete-task/:id", tasksController.deleteTask);
router.get("/getAll", tasksController.getAllTasks);
router.put("/edit-task/:id", tasksController.editTask);

module.exports = router;
