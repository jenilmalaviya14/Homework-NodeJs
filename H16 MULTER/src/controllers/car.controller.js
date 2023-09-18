const { carService } = require("../services")

const createCar = async (req, res) => {
    try {
        const reqBody = req.body

        if (req.file) {
            reqBody.image = req.file.filename;
          } else {
            throw new Error("Car image is required!");
          }

        const car = await carService.createCar(reqBody);
        if (!car) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "car laptop create successfully!",
            data: { car }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const listCar = async (req, res) => {
    try {
        const car = await carService.listCar();

        if (!car) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "car laptop List Successfully!",
            data: { car }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const deleteCar = async (req, res) => {
    try {
        const id = req.params.Id
        const car = await carService.listCar();
        if (!car) {
            throw new Error("Please Providde UserId!");
        };
        await carService.deleteCar(id)

        res.status(200).json({
            success: true,
            message: "car laptop Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

const updateCar = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await carService.getId(id);
        if (!car) {
            throw new Error ("Mobile not found!")
        }
        await carService.updateCar(id,req.body)
        res.status(200).json({
            success : true,
            message : "car laptop Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { createCar, listCar, deleteCar, updateCar }