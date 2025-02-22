const express = require("express");
const cors = require('cors')
errorMiddleware = require("./middleware/Error");
const cookieParser = require("cookie-parser");

const app = express();

// ✅ Enable CORS for all origins (frontend access)
app.use(cors());


app.use(express.json());
app.use(cookieParser());
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
