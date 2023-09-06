const { laptopService } = require("../services")

const createLaptop = async (req, res) => {
    try {
        const reqBody = req.body
        const laptop = await laptopService.createLaptop(reqBody);
        if (!laptop) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "laptop create successfully!",
            data: { laptop }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listLaptop = async (req, res) => {
    try {
        const laptop = await laptopService.listLaptop();

        if (!laptop) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "laptop List Successfully!",
            data: { laptop }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteLaptop = async (req, res) => {
    try {
        const id = req.params.Id
        const laptop = await laptopService.listLaptop();
        if (!laptop) {
            throw new Error("Please Providde UserId!");
        };
        await laptopService.deleteLaptop(id)

        res.status(200).json({
            success: true,
            message: "laptop Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateLaptop = async (req, res) => {
    try {
        const id = req.params.id;
        const laptop = await laptopService.getId(id);
        if (!laptop) {
            throw new Error ("Mobile not found!")
        }
        await laptopService.updateLaptop(id,req.body)
        res.status(200).json({
            success : true,
            message : "laptop Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createLaptop, listLaptop, deleteLaptop, updateLaptop }