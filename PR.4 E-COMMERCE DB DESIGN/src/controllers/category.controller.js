const { categoryService } = require("../services")

const createCategory = async (req, res) => {
    try {
        const reqBody = req.body
        const category = await categoryService.createCategory(reqBody);
        if (!category) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Category create successfully!",
            data: { category }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listCategory = async (req, res) => {
    try {
        const category = await categoryService.listCategory();

        if (!category) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "Category List Successfully!",
            data: { category }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.Id
        const category = await categoryService.listCategory();
        if (!category) {
            throw new Error("Please Providde UserId!");
        };
        await categoryService.deleteCategory(id)

        res.status(200).json({
            success: true,
            message: "Category Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await categoryService.getId(id);
        if (!category) {
            throw new Error ("Mobile not found!")
        }
        await categoryService.updateCategory(id,req.body)
        res.status(200).json({
            success : true,
            message : "Category Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createCategory, listCategory, deleteCategory, updateCategory }