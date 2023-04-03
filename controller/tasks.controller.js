const User = require("../models/users.model");
const Task = require("../models/tasks.model");

/*Create tasks */
module.exports.createTask = async function (req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      let task = await Task.create({
        content: req.body.content,
        user: req.params.id,
      });
      task.save();
      user.tasks.push(task);
      user.save();

      return res.json({
        task,
        data: {
          message: "task created",
        },
      });
    }

    return res.json({ question });
    // res.send("get hello from create Tasks");
  } catch (err) {
    return res.status(500).json({
      data: { message: "Internal server error" },
    });
  }
};

/*Delete tasks */

module.exports.deleteTask = async function (req, res) {
  try {
    let id = req.params.id;
    const task = await Task.findById(id);
    if (task) {
      await User.findByIdAndUpdate(task.user, {
        $pull: { tasks: id },
      });

      await Task.findByIdAndDelete(id);
      return res.status(200).json({
        data: { message: "Task deleted successfully" },
      });
    }
    if (!task) {
      return res.json({
        message: "Task does not exists ",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: { message: "Internal server error" },
    });
  }
};

/*Get all Tasks */

module.exports.getAllTasks = async function (req, res) {
  try {
    const tasks = await Task.find({});
    return res.json({
      data: {
        tasks,
      },
      message: "get all tasks",
    });
  } catch (err) {
    return res.status(500).json({
      data: { message: "Internal server error" },
    });
  }
};

/*Edit tasks */
module.exports.editTask = async function (req, res) {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, {
      content: req.body.content,
    });

    if (!updated) {
      return res.json({
        message: "get error in updating",
      });
    }

    return res.json({
      message: " Tasks updated",
    });
  } catch (err) {
    return res.status(500).json({
      data: { message: "Internal server error" },
    });
  }
};
