const { bookingService } = require("../services");

const createBooking = async (req, res) => {
  try {

    const reqBody = req.body

    const Booking = await bookingService.createBooking(reqBody);
    if (!Booking) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Booking Successfully Create"),
      data: { Booking }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const listBooking = async (req, res) => {
  try {
    const Booking = await bookingService.listBooking();
    if (!Booking) {
      throw new Error("mething wen twrong, please try again or later!")
    }
    res.status(200).json({
      success: true,
      message: ("Booking Successfully Get"),
      data: { Booking }
    })
  } catch (error) {
    res.status().json({ success: false, message: error.message })
  }
};

const deleteBooking = async (req, res) => {
  try {
    const id = req.params.Id
    const Booking = await bookingService.listBooking();
    if (!Booking) {
      throw new Error("Please Providde UserId!");
    }
    await bookingService.deleteBooking(id)

    res.status(200).json({
      success: true,
      message: (`Booking Successfully delete`)
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


const updateBooking = async (req, res) => {
  try {
    const BookingId = req.params.Id;

    const cateExists = await bookingService.getId(BookingId);
    if (!cateExists) {
      throw new Error("Booking not found!");
    }

    await bookingService.updateBooking(BookingId, req.body);

    res.status(200).json({
      success: true,
      message: "Booking details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createBooking, listBooking, deleteBooking, updateBooking };


