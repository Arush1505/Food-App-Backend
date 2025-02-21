const express = require("express");
const app = express();
const color = require("colors"); // Import the color module to use in console
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
// const test_user = require("./routes/test.js");
const auth = require("./routes/auth.js")
const user_control = require("./routes/user.js")
const connectDB = require("./config/db.js");
const restaurant =  require("/routes/restaurant.js")
const category =  require("/routes/category.js");
const category =  require("/routes/food.js");

dotenv.config();

// Middleware
connectDB()
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// app.use("/test", test_user);

app.use("/authorize",auth);
app.use("/user",user_control);
app.use("/res",restaurant);
app.use("/category",category);
app.use("/food",food);
app.use("/Order",food);


const portnew = process.env.port;

app.get("/", (req, res) => {
  // connectDB();
  // auth;
  res.status(200).send("Hello World!");
});

app.listen(portnew, () => {
  console.log(`Example app listening on port ${portnew}`.bgMagenta.blue);
});
