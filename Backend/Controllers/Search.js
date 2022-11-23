const searchItems = (req, res, next) => {
    res.json({ message: "Search Items by " + req.params.searchTerm });
};

module.exports = {searchItems}