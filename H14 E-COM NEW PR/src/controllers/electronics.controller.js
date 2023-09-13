const { electronicService } = require("../services")

const createElectronic = async (req, res) => {
    try {
        const reqBody = req.body
        const electronic = await electronicService.createElectronic(reqBody);
        if (!electronic) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "electronic create successfully!",
            data: { electronic }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listElectronic = async (req, res) => {
    try {
        const electronic = await electronicService.listElectronic();

        if (!electronic) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "electronic List Successfully!",
            data: { electronic }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteElectronic = async (req, res) => {
    try {
        const id = req.params.Id
        const electronic = await electronicService.listElectronic();
        if (!electronic) {
            throw new Error("Please Providde UserId!");
        };
        await electronicService.deleteElectronic(id)

        res.status(200).json({
            success: true,
            message: "electronic Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateElectronic = async (req, res) => {
    try {
        const id = req.params.id;
        const electronic = await electronicService.getId(id);
        if (!electronic) {
            throw new Error ("Mobile not found!")
        }
        await electronicService.updateElectronic(id,req.body)
        res.status(200).json({
            success : true,
            message : "electronic Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

module.exports = { createElectronic, listElectronic, deleteElectronic, updateElectronic }