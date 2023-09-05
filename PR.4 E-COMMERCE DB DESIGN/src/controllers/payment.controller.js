const { paymentService } = require("../services")

const createPayment = async (req, res) => {
    try {
        const reqBody = req.body
        const payment = await paymentService.createPayment(reqBody);
        if (!payment) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "payment create successfully!",
            data: { payment }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listPayment = async (req, res) => {
    try {
        const payment = await paymentService.listPayment();

        if (!payment) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "payment List Successfully!",
            data: { payment }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deletePayment = async (req, res) => {
    try {
        const id = req.params.Id
        const payment = await paymentService.listPayment();
        if (!payment) {
            throw new Error("Please Providde UserId!");
        };
        await paymentService.deletePayment(id)

        res.status(200).json({
            success: true,
            message: "payment Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updatePayment = async (req, res) => {
    try {
        const id = req.params.id;
        const payment = await paymentService.getId(id);
        if (!payment) {
            throw new Error ("Mobile not found!")
        }
        await paymentService.updatePayment(id,req.body)
        res.status(200).json({
            success : true,
            message : "payment Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createPayment, listPayment, deletePayment, updatePayment }