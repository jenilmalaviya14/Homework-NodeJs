const { categoryService } = require("../services");
const Category = require('../models/category')
const createCategory = async (req, res) => {
  try {
    //  const category = await Category.find()
    const reqBody = req.body

    const Category = await categoryService.createCategory(reqBody);
    if (!Category) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Category Successfully Create"),
      data: { Category }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const getCategory = async (req, res) => {
  try {
    //  const category = await Category.find()
    const category = await categoryService.getCategoryList();
    if (!category) {
      throw new Error("something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Category show"),
      data: { category }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.Id
    const category =await categoryService.getCategoryList()
    let cat_id = category.map((item)=> {return item.id})
    let data = cat_id.find((item) => {return item === id.toString()})
    if(!data){ return res.status(404).json("Not Found")}
    console.log(data);

    if (!category) {
      throw new Error("Please provide userId")
    }
    await categoryService.deletecategory(id)

    res.status(200).json({
      success: true,
      message: "Category successfully deleted",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

module.exports = { createCategory, getCategory, deleteCategory };

