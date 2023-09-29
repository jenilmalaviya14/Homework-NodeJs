const { legionService } = require("../services")
const fs = require("fs")

const createLegion = async (req, res) => {
    try {
        const reqBody = req.body

        if (req.file) {
            reqBody.image = req.file.filename;
        } else {
            throw new Error("Product image is required!");
        }

        const legion = await legionService.createLegion(reqBody);
        if (!legion) {
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "legionlaptop  create successfully!",
            data: { legion }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listLegion = async (req, res) => {
    try {
        const legion = await legionService.listLegion();

        if (!legion) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "legion laptop List Successfully!",
            data: { legion }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteLegion = async (req, res) => {
    try {
        const id = req.params.Id
        const legion = await legionService.listLegion();
        if (!legion) {
            throw new Error("Please Providde UserId!");
        };
        await legionService.deleteLegion(id)

        res.status(200).json({
            success: true,
            message: "legion laptop Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateLegion = async (req, res) => {
    try {
        const id = req.params.id;
        const legion = await legionService.getId(id);

        if (!legion) {
            throw new Error("Laptop not found!")
        }

        const updateLegion = await legionService.updateLegion(id, req.body, req.file)
        if (updateLegion) {
            if (req.file) {
                const filePath = `./public/images/${legion.image}`;
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "legion laptop Successfully Updated",
            data: { updateLegion }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createLegion, listLegion, deleteLegion, updateLegion }