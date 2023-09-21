const { hpService } = require("../services")

const createHp = async (req, res) => {
    try {
        const reqBody = req.body

        if (req.file) {
            reqBody.image = req.file.filename;
        } else {
            throw new Error("Product image is required!");
        }

        const hp = await hpService.createHp(reqBody);
        if (!hp) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Hp laptop create successfully!",
            data: { hp }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listHp = async (req, res) => {
    try {
        const hp = await hpService.listHp();

        if (!hp) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "Hp laptop List Successfully!",
            data: { hp }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteHp = async (req, res) => {
    try {
        const id = req.params.Id
        const hp = await hpService.listHp();
        if (!hp) {
            throw new Error("Please Providde UserId!");
        };
        await hpService.deleteHp(id)

        res.status(200).json({
            success: true,
            message: "Hp laptop Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateHp = async (req, res) => {
    try {
        const id = req.params.id;
        const hp = await hpService.getId(id);
        if (!hp) {
            throw new Error("Mobile not found!")
        }
        await hpService.updateHp(id, req.body)
        res.status(200).json({
            success: true,
            message: "Hp laptop Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createHp, listHp, deleteHp, updateHp }