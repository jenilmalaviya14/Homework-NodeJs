const { studentService } = require("../services");

const createStudent = async (req, res) => {
  try {
    const reqBody = req.body

    const Student = await studentService.createStudent(reqBody);
    if (!Student) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Student Successfully Create"),
      data: { Student }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const getStudent = async (req, res) => {
  try {
    const Student = await studentService.getStudentList();
    if (!Student) {
      throw new Error("something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Student show"),
      data: { Student }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const id = req.params.Id
      const Student =await studentService.getStudentList()

    let cat_id = Student.map((item)=> {return item.id})
    let data = cat_id.find((item) => {return item === id.toString()})
    if(!data){ return res.status(404).json("Not Found")}

    if (!Student) {
      throw new Error("Please provide userId")
    }
    await studentService.deleteStudent(id)

    res.status(200).json({
      success: true,
      message: "Student successfully deleted",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
};

const updateStudent = async (req, res) => {
  try {
    const StudentId = req.params.Id;

    const cateExists = await studentService.getStudentById(StudentId);
    if (!cateExists) {
      throw new Error("Student not found!");
    }

    await studentService.updateDetails(StudentId, req.body);

    res.status(200).json({
      success: true,
      message: "Student details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = { createStudent, getStudent, deleteStudent, updateStudent };

