const { busService } = require("../services")

const createBus = async (req, res) => {
    try {
        const reqBody = req.body
        const bus = await busService.createBus(reqBody);
        if (!bus) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "bus create successfully!",
            data: { bus }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listBus = async (req, res) => {
    try {
        const bus = await busService.listBus();

        if (!bus) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "bus List Successfully!",
            data: { bus }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteBus = async (req, res) => {
    try {
        const id = req.params.Id
        const bus = await busService.listBus();
        if (!bus) {
            throw new Error("Please Providde UserId!");
        };
        await busService.deleteBus(id)

        res.status(200).json({
            success: true,
            message: "bus Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateBus = async (req, res) => {
    try {
        const id = req.params.id;
        const bus = await busService.getId(id);
        if (!bus) {
            throw new Error ("Mobile not found!")
        }
        await busService.updateBus(id,req.body)
        res.status(200).json({
            success : true,
            message : "bus Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createBus, listBus, deleteBus, updateBus }