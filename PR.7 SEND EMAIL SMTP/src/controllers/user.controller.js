const { userService, emailService } = require("../services");
const ejs = require("ejs");
const path = require("path");


const createUser = async (req, res) => {
    try {
        const reqBody = req.body

        const userExists = await userService.getUserByEmail(reqBody.email);
        if (userExists) {
            throw new Error("User already created by this email!");
        }

        const user = await userService.createUser(reqBody);

        if (!user) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "user create successfully!",
            data: { user }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listUser = async (req, res) => {
    try {
        const user = await userService.listUser();

        if (!user) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "user List Successfully!",
            data: { user }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.Id
        const user = await userService.listUser();
        if (!user) {
            throw new Error("Please Providde UserId!");
        };
        await userService.deleteUser(id)

        res.status(200).json({
            success: true,
            message: "user Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getId(id);
        if (!user) {
            throw new Error("Mobile not found!")
        }
        await userService.updateUser(id, req.body)
        res.status(200).json({
            success: true,
            message: "user Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const sendMail = async (req, res) => {
    try {
        const reqBody = req.body;
        const sendEmail = await emailService.sendMail(
            reqBody.email,
            reqBody.subject,
            reqBody.text
        );
        if (!sendEmail) {
            throw new Error("Something went wrong, please try again or later.");
        }

        res
            .status(200)
            .json({ success: true, message: "Email send successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createUser, listUser, deleteUser, updateUser, sendMail }