const express = require("express");

const router = express.Router();

const searchController = require("../Controllers/Search");

// Route to get Search Names
router.get("/searchItems", searchController.searchItems);

module.exports = router;

