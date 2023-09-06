const { leginoService } = require("../services")

const createLegino = async (req, res) => {
    try {
        const reqBody = req.body
        const legino = await leginoService.createLegino(reqBody);
        if (!legino) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "legino laptop create successfully!",
            data: { legino }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listLegino = async (req, res) => {
    try {
        const legino = await leginoService.listLegino();

        if (!legino) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "legino laptop List Successfully!",
            data: { legino }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteLegino = async (req, res) => {
    try {
        const id = req.params.Id
        const legino = await leginoService.listLegino();
        if (!legino) {
            throw new Error("Please Providde UserId!");
        };
        await leginoService.deleteLegino(id)

        res.status(200).json({
            success: true,
            message: "legino laptop Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateLegino = async (req, res) => {
    try {
        const id = req.params.id;
        const legino = await leginoService.getId(id);
        if (!legino) {
            throw new Error ("Mobile not found!")
        }
        await leginoService.updateLegino(id,req.body)
        res.status(200).json({
            success : true,
            message : "legino laptop Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createLegino, listLegino, deleteLegino, updateLegino }