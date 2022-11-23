const express = require("express");
const routes = require("./Routes");

const app = express();

var PORT = 3000;

app.use(express.json());

app.use('/', routes);

const listener = app.listen(PORT, () => {
    console.log("Server running on port " + listener.address().port);
});


