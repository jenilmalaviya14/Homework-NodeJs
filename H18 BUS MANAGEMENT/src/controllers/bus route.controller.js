const { busrouteService } = require("../services")

const createBusroute = async (req, res) => {
    try {
        const reqBody = req.body
        const busroute = await busrouteService.createBusroute(reqBody);
        if (!busroute) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "busroute create successfully!",
            data: { busroute }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listBusroute = async (req, res) => {
    try {
        const busroute = await busrouteService.listBusroute();

        if (!busroute) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "busroute List Successfully!",
            data: { busroute }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteBusroute = async (req, res) => {
    try {
        const id = req.params.Id
        const busroute = await busrouteService.listBusroute();
        if (!busroute) {
            throw new Error("Please Providde UserId!");
        };
        await busrouteService.deleteBusroute(id)

        res.status(200).json({
            success: true,
            message: "busroute Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateBusroute = async (req, res) => {
    try {
        const id = req.params.id;
        const busroute = await busrouteService.getId(id);
        if (!busroute) {
            throw new Error ("Mobile not found!")
        }
        await busrouteService.updateBusroute(id,req.body)
        res.status(200).json({
            success : true,
            message : "busroute Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createBusroute, listBusroute, deleteBusroute, updateBusroute }