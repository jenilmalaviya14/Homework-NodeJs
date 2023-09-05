const { discountService } = require("../services")

const createDiscount = async (req, res) => {
    try {
        const reqBody = req.body
        const discount = await discountService.createDiscount(reqBody);
        if (!discount) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "discount create successfully!",
            data: { discount }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listDiscount = async (req, res) => {
    try {
        const discount = await discountService.listDiscount();

        if (!discount) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "discount List Successfully!",
            data: { discount }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteDiscount = async (req, res) => {
    try {
        const id = req.params.Id
        const discount = await discountService.listDiscount();
        if (!discount) {
            throw new Error("Please Providde UserId!");
        };
        await discountService.deleteDiscount(id)

        res.status(200).json({
            success: true,
            message: "discount Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateDiscount = async (req, res) => {
    try {
        const id = req.params.id;
        const discount = await discountService.getId(id);
        if (!discount) {
            throw new Error ("Mobile not found!")
        }
        await discountService.updateDiscount(id,req.body)
        res.status(200).json({
            success : true,
            message : "discount Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createDiscount, listDiscount, deleteDiscount, updateDiscount }