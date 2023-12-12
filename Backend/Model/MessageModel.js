const mongoose  = require("mongoose");

const messageModel=mongoose.Schema({
    text:{type : [String]},
    
})

const MessageModel = mongoose.model("message", messageModel);

module.exports={
    MessageModel
}