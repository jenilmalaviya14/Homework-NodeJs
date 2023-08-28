const { hotelService } = require("../services");
const hotel = require('../models/hotel');

const createHotel = async (req, res) => {
  try {
    //  const hotel = await hotel.find()
    const reqBody = req.body

    const hotel = await hotelService.createhotel(reqBody);
    if (!hotel) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Hotel Successfully Create"),
      data: { hotel }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const getHotel = async (req, res) => {
  try {

    const hotel = await hotelService.gethotelList();
    if (!hotel) {
      throw new Error("something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Hotel show"),
      data: { hotel }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteHotel = async (req, res) => {
  try {
    const id = req.params.Id
    const hotel =await hotelService.gethotelList()
    let hotel_id = hotel.map((item)=> {return item.id})
    let data = hotel_id.find((item) => {return item === id.toString()})
    if(!data){ return res.status(404).json("Not Found")}
    console.log(data);

    if (!hotel) {
      throw new Error("Please provide userId")
    }
    await hotelService.deletehotel(id)

    res.status(200).json({
      success: true,
      message: "Hotel successfully deleted",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

const updateHotel = async (req, res) => {
  try {
    const hotelId = req.params.Id;

    const cateExists = await hotelService.hotelById(hotelId);
    if (!cateExists) {
      throw new Error("Hotel not found!");
    }

    await hotelService.updateDetails(hotelId, req.body);

    res.status(200).json({
      success: true,
      message: "Hotel details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createHotel, getHotel, deleteHotel, updateHotel };

