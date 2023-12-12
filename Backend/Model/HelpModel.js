const mongoose  = require("mongoose");

const helpModel=mongoose.Schema({
    title:{type : String},
    subtitle:{type : String},
    articles:{type : Number}
})

const HelpModel = mongoose.model("help", helpModel);

module.exports={
    HelpModel
}