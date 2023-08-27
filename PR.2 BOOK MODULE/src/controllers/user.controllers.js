// const User = require("../models/user.model");
const { userService } = require("../services");

/** create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;

    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("crete User Successfully "),
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


const getUserList = async (req, res) => {
  try {
    const user = await userService.getUser();
    if (!user) {
      throw new Error("something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: { user },
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const deleteUserbyId = async (req, res) => {
  try {
    const UserId = req.params.UserId;
    const user = await userService.getUser();
    const user_id = user.map((item) => { return item.id })
    const data = user_id.find((item) => { return item === id.toString() })
    if (!data) { return res.status(404).json("Not Found") }

    if (!UserId) {
      throw new Error('Please provide userId');
    }
    await userService.deleteUser(UserId)

    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createUser,
  getUserList,
  deleteUserbyId
};