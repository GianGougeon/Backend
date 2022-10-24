const Message = require("./../models/chat.js");

//Mostrar mensajes
const getMessages = async () => {
    try {
        const messages = await Message.find({});
        return messages;
    } catch (err) {
        return [];
    }
};

//Guardar mensaje
const saveMessages = async (message) => {
    try {
        const newMessage = new Message(message);
        await newMessage.save();
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getMessages,
    saveMessages,
};
