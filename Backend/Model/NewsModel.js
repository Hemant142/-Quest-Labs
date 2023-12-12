const mongoose  = require("mongoose");

const newsModel=mongoose.Schema({
    title:{type : String},
    image:{type : String},
    tags:{type : [String]},
    description:{type : String}
})

const NewsModel = mongoose.model("news", newsModel);

module.exports={
    NewsModel
}