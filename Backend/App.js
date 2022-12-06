const express = require("express");
const cors = require("cors");
const searchRouter = require("../Backend/Routes/Search");
const recipeRouter = require("../Backend/Routes/Recipe");
const { spawn } = require("child_process");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/RecipeWiz", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  });

const app = express();

var PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/", recipeRouter);
app.use(searchRouter);

// Testing Python Script
app.get("/testScipt", (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python3", ["../Backend/Python Scripts/test.py"]);
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  });
});

const listener = app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
