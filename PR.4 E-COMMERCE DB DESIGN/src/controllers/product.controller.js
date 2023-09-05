const { productService } = require("../services")

const createProduct = async (req, res) => {
    try {
        const reqBody = req.body

        const product = await productService.createProduct(reqBody);
        if (!product) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "product create successfully!",
            data: { product }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listProduct = async (req, res) => {
    try {
        const product = await productService.listProduct();

        if (!product) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "product List Successfully!",
            data: { product }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.Id
        const product = await productService.listProduct();
        if (!product) {
            throw new Error("Please Providde UserId!");
        };
        await productService.deleteProduct(id)

        res.status(200).json({
            success: true,
            message: "product Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productService.getId(id);
        if (!product) {
            throw new Error ("Mobile not found!")
        }
        await productService.updateProduct(id,req.body)
        res.status(200).json({
            success : true,
            message : "product Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createProduct, listProduct, deleteProduct, updateProduct }