const mongoose = require("mongoose");
require("dotenv").config();

let MONGOURL =
    process.env.MONGOURL || "mongodb://localhost:27017/passport-mongo";

//mongoose

mongoose
    .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.error(err));
