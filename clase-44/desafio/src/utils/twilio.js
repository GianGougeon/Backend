const twilio = require("twilio");

const dotenv = require("dotenv");
dotenv.config();

const accountSid = process.env.ACCOUNT;
const authToken = process.env.TOKEN;

const client = twilio(accountSid, authToken);

const sendSMS = async (number, msg) => {
    try {
        await client.messages.create({
            body: msg,
            from: "+16509552379",
            to: number,
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    sendSMS
};
