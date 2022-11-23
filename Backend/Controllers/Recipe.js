const getAll = (req, res) => {  
    res.json({ message: "Get All Recipes" });
}

const getById = (req, res) => {
    res.json({ message: "Get Recipe by ID" });
}

const getRecommended =  (req, res) => {
    res.json({ message: "Get Recommended Recipes" });
}

module.exports = {getAll, getById, getRecommended}