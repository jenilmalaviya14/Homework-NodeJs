const { useraddressService } = require("../services")

const createUserAdd = async (req, res) => {
    try {
        const reqBody = req.body
        const useradd = await useraddressService.createUserAdd(reqBody);
        if (!useradd) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "user address create successfully!",
            data: { useradd }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listUserAdd = async (req, res) => {
    try {
        const useradd = await useraddressService.listUserAdd();

        if (!useradd) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "user address List Successfully!",
            data: { useradd }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteUserAdd = async (req, res) => {
    try {
        const id = req.params.Id
        const useradd = await useraddressService.listUserAdd();
        if (!useradd) {
            throw new Error("Please Providde UserId!");
        };
        await useraddressService.deleteUserAdd(id)

        res.status(200).json({
            success: true,
            message: "user address Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateUserAdd = async (req, res) => {
    try {
        const id = req.params.id;
        const useradd = await useraddressService.getId(id);
        if (!useradd) {
            throw new Error ("Mobile not found!")
        }
        await useraddressService.updateUserAdd(id,req.body)
        res.status(200).json({
            success : true,
            message : "user address Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createUserAdd, listUserAdd, deleteUserAdd, updateUserAdd }