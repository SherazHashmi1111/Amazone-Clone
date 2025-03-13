const express = require("express");
errorMiddleware = require("./middleware/Error");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ Allow only your frontend
    credentials: true, // ✅ Allow cookies & authorization headers
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// Route imports
const products = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");

app.use("/api/v1", products);
app.use("/api/v1", user);
app.use("/api/v1", order);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
