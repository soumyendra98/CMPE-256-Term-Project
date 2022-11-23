const getAll = (req, res) => {  
    res.json({ message: "Get All Recipes" });
}

const getById = (req, res) => {
    res.json({ message: "Get Recipe by ID, ID is " + req.params.id});
}

const getRecommended =  (req, res) => {
    res.json({ message: "Get Recommended Recipes by name " + req.params.name });
}

module.exports = {getAll, getById, getRecommended}