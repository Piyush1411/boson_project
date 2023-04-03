const express = require("express");
const router = express.Router();
const userController = require("../controller/users.controller");

router.post("/create-user", userController.createUser);
module.exports = router;
