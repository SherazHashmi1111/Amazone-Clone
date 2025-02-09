const express = require("express");
errorMiddleware = require("./middleware/Error");

const app = express();

app.use(express.json());
// Route imports
const products = require("./routes/productRoute");
const user = require("./routes/userRoutes");

app.use("/api/v1", products);
app.use("/api/v1", user);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
