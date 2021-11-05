const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
require("./config/mongoose.config");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const CarRoutes = require("./routes/car.routes");
CarRoutes(app);
require("./routes/user.routes")(app);
require("./routes/payment.routes")(app);
require("./routes/review.routes")(app);

app.listen(process.env.MY_PORT, () =>
  console.log("In the port", process.env.MY_PORT)
);
