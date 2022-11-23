const express = require("express");
const searchRouter = require("../Backend/Routes/Search");
const recipeRouter = require("../Backend/Routes/Recipe");

const app = express();

var PORT = 3000;

app.use(express.json());
app.use('/', recipeRouter);
app.use(searchRouter);


const listener = app.listen(PORT, () => {
    console.log("Server running on port " + listener.address().port);
});


