const { busopertorService } = require("../services")

const createBusoperator = async (req, res) => {
    try {
        const reqBody = req.body
        const busoperator = await busopertorService.createBusoperator(reqBody);
        if (!busoperator) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Bus Operator create successfully!",
            data: { busoperator }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listBusoperator = async (req, res) => {
    try {
        const busoperator = await busopertorService.listBusoperator();

        if (!busoperator) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "Bus Operator List Successfully!",
            data: { busoperator }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteBusoperator = async (req, res) => {
    try {
        const id = req.params.Id
        const busoperator = await busopertorService.listBusoperator();
        if (!busoperator) {
            throw new Error("Please Providde UserId!");
        };
        await busopertorService.deleteBusoperator(id)

        res.status(200).json({
            success: true,
            message: "Bus Operator Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateBusoperator = async (req, res) => {
    try {
        const id = req.params.id;
        const busoperator = await busopertorService.getId(id);
        if (!busoperator) {
            throw new Error ("Mobile not found!")
        }
        await busopertorService.updateBusoperator(id,req.body)
        res.status(200).json({
            success : true,
            message : "Bus Operator Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createBusoperator, listBusoperator, deleteBusoperator, updateBusoperator }