const express = require("express");
const router = express.Router();

router.use("/users", require("./users.route"));
router.use("/tasks", require("./tasks.route"));

module.exports = router;
