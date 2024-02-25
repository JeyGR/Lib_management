const express = require("express");
const app = express();
const routes = require("./routes");
const connectDB = require("./connectDB");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);
console.log(process.env);
const port = 3000;
app.listen(port, () => {
  console.log("Server is Running");
});
