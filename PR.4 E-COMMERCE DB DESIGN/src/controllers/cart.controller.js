const { cartService } = require("../services")

const createCart = async (req, res) => {
    try {
        const reqBody = req.body
        const cart = await cartService.createCart(reqBody);
        if (!cart) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "cart create successfully!",
            data: { cart }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listCart = async (req, res) => {
    try {
        const cart = await cartService.listCart();

        if (!cart) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "cart List Successfully!",
            data: { cart }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteCart = async (req, res) => {
    try {
        const id = req.params.Id
        const cart = await cartService.listCart();
        if (!cart) {
            throw new Error("Please Providde UserId!");
        };
        await cartService.deleteCart(id)

        res.status(200).json({
            success: true,
            message: "cart Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateCart = async (req, res) => {
    try {
        const id = req.params.id;
        const cart = await cartService.getId(id);
        if (!cart) {
            throw new Error ("Mobile not found!")
        }
        await cartService.updateCart(id,req.body)
        res.status(200).json({
            success : true,
            message : "cart Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createCart, listCart, deleteCart, updateCart }