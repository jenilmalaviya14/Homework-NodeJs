const { bookService } = require("../services");

const createBook = async (req, res) => {
  try {
    //  const category = await Category.find()
    const reqBody = req.body

    const book = await bookService.createBook(reqBody);
    if (!book) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Books Successfully Create"),
      data: { book }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


const listBook = async (req, res) => {
  try {
    //  const category = await Category.find()

    const book = await bookService.listBook();
    if (!book) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Books Successfully Create"),
      data: { book }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deletebook = async (req, res) => {
  try {
    const id = req.params.Id;
    const book = await bookService.listBook()
    let book_id = book.map((item) => { return item.id })
    let data = book_id.find((item) => { return item === id.toString() })
    if (!data) { return res.status(404).json("Not Found") }
    if (!id) {
      throw new Error("Please provide userId")
    }
    await bookService.deleteBook(id)

    res.status(200).json({
      success: true,
      message: "Book successfully deleted",
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}


module.exports = { createBook, listBook, deletebook };

