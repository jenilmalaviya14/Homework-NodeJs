const mobileService = require("../services/mobile.service");

const createMobile = async (req, res) => {
  try {

    const reqBody = req.body

    const Mobile = await mobileService.createMobile(reqBody);
    if (!Mobile) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Mobile Successfully Create"),
      data: { Mobile }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getMobile = async (req, res) => {
  try {
    const Mobile = await mobileService.getMobile();
    if (!Mobile) {
      throw new Error("mething wen twrong, please try again or later!")
    }
    res.status(200).json({
      success: true,
      message: ("Mobile Successfully Get"),
      data: { Mobile }
    })
  } catch (error) {
    res.status().json({ success: false, message: error.message })
  }
}

const getMobileFilter = async (req, res) => {
  try {
    const Mobile = await mobileService.getMobile();
    if (!Mobile) {
      throw new Error("something wen twrong, please try again or later!");
    }

    const filters = req.query;
    const filterUsers = Mobile.filter(user => {
      console.log(filters);
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });

    res.status(200).json({
      success: true,
      message: ("Mobile Successfully Get"),
      data: { filterUsers }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


const deleteMobile = async (req, res) => {
  try {
    const id = req.params.Id
    const Mobile = await mobileService.getMobile();
    if (!Mobile) {
      throw new Error("Please Providde UserId!");
    }
    await mobileService.deleteMobile(id)

    res.status(200).json({
      success: true,
      message: (`Mobile Successfully delete`)
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


const updateMobile = async (req, res) => {
  try {
    const mobileId = req.params.Id;

    const cateExists = await mobileService.getMobileById(mobileId);
    if (!cateExists) {
      throw new Error("Mobile not found!");
    }

    await mobileService.updateDetails(mobileId, req.body);

    res.status(200).json({
      success: true,
      message: "Mobile details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createMobile, getMobile, getMobileFilter, deleteMobile, updateMobile };


