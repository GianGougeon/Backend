const { mongoose } = require("mongoose");

const Message = mongoose.model("messages", {
    author: String,
    text: String,
});

module.exports = Message;
