const User = require("../models/users.model");

module.exports.createUser = async function (req, res) {
  try {
    if (req.body.password != req.body.confirm_password) {
      return res.json({
        message: "Password and confirm password to be same !",
      });
    }

    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.json({
        message: "user already exists",
      });
    }

    if (!user) {
      const newUser = await User.create(req.body);
      if (!newUser) {
        return res.json({
          message: "error in creating user while signing up",
        });
      }

      return res.json({
        newUser,
        data: {
          message: "user created successfully",
        },
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: { message: "Internal server error" },
    });
  }
};
