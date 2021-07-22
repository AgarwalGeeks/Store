const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

// calling environment variables and constants
env.config();

// mongodb connection string
//

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@store-cluster.4inst.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  });

// Using Json parser
app.use(express.json());

// Sample API's
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome from server",
  });
});

app.post("/getData", (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running at PORT", process.env.PORT);
});
