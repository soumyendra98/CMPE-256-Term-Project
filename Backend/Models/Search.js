const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
},{
    collection : 'Food Sample' 
});

const Search = mongoose.model("Search", searchSchema);
module.exports = Search;
