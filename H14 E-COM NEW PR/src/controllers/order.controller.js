const { orderService } = require("../services")

const createOrder = async (req, res) => {
    try {
        const reqBody = req.body
        const order = await orderService.createOrder(reqBody);
        if (!order) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "order create successfully!",
            data: { order }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listOrder = async (req, res) => {
    try {
        const order = await orderService.listOrder();

        if (!order) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "order List Successfully!",
            data: { order }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteOrder = async (req, res) => {
    try {
        const id = req.params.Id
        const order = await orderService.listOrder();
        if (!order) {
            throw new Error("Please Providde UserId!");
        };
        await orderService.deleteOrder(id)

        res.status(200).json({
            success: true,
            message: "order Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await orderService.getId(id);
        if (!order) {
            throw new Error ("Mobile not found!")
        }
        await orderService.updateOrder(id,req.body)
        res.status(200).json({
            success : true,
            message : "order Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createOrder, listOrder, deleteOrder, updateOrder }