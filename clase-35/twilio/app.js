import twilio from "twilio";

const accountSid = "";
const authToken = "";

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
