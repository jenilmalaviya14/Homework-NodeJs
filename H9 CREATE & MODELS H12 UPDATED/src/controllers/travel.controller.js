const { travelService } = require("../services");

const createTravel = async (req, res) => {
  try {
    const reqBody = req.body

    const travel = await travelService.createTravel(reqBody);
    if (!travel) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Travel Successfully Create"),
      data: { travel }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const getTravel = async (req, res) => {
  try {

    const travel = await travelService.getTravelList();
    if (!travel) {
      throw new Error("something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("Travel show"),
      data: { travel }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteTravel = async (req, res) => {
  try {
    const id = req.params.Id
    const travel =await travelService.getTravelList()
    let travel_id = travel.map((item)=> {return item.id})
    let data = travel_id.find((item) => {return item === id.toString()})
    if(!data){ return res.status(404).json("Not Found")}
    console.log(data);

    if (!travel) {
      throw new Error("Please provide userId")
    }
    await travelService.deleteTravel(id)

    res.status(200).json({
      success: true,
      message: "Travel successfully deleted",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
};

const updateTravel = async (req, res) => {
  try {
    const travelId = req.params.Id;

    const cateExists = await travelService.getTravelById(travelId);
    if (!cateExists) {
      throw new Error("Travel not found!");
    }

    await travelService.updateDetails(travelId, req.body);

    res.status(200).json({
      success: true,
      message: "Travel details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createTravel, getTravel, deleteTravel, updateTravel };

