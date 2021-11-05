const CarController = require("../controllers/car.controllers");
module.exports = (app) => {
  app.post("/api/car", CarController.addNewCar);
  app.get("/api/car", CarController.getAllCars);
  app.get("/api/car/:id", CarController.getCarById);
  app.put("/api/car/:id", CarController.updateCarById);
  app.delete("/api/car/:id", CarController.deleteCarById);
};
