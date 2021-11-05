const Car = require("../models/car.models");
// const createProduct = (req, res) => {
//   Product.create(req.body)
//     .then((newProduct) => res.json(newProduct))
//     .catch((err) => console.log(err));
// };

module.exports.addNewCar = (request, response) => {
  const { carImg, carName, specifications, price, time } = request.body;
  Car.create({
    carImg,
    carName,
    specifications,
    price,
    time,
  })
    .then((car) => response.json(car))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllCars = (req, res) => {
  Car.find({})
    .then((allCar) => res.json(allCar))
    .catch((err) => res.status(400).json(err));
};
module.exports.getCarById = (req, res) => {
  Car.findOne({ _id: req.params.id })
    .then((carId) => res.json(carId))
    .catch((err) => res.status(400).json(err));
};
module.exports.updateCarById = (req, res) => {
  Car.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updateCar) => res.json(updateCar))
    .catch((err) => res.status(400).json(err));
};
module.exports.deleteCarById = (req, res) => {
  Car.deleteOne({ _id: req.params.id })
    .then((deleteCar) => res.json(deleteCar))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", err: err })
    );
};
