import twilio from "twilio";

const accountSid = "AC519401795097b7c33ac33a6f7f72cf21";
const authToken = "d38751ee44722d2dd8e397c32bd883b6";

const client = twilio(accountSid, authToken);
const number = process.argv[2];
const msg = process.argv[3];
try {
    const message = await client.messages.create({
        body: msg,
        from: "+16509552379",
        to: number,
    });
    console.log(message.sid);
} catch (err) {
    console.log(err);
}
