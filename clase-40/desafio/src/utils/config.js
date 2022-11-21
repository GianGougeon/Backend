require("dotenv").config();

let configENV = {
    mongoURL:
        process.env.MONGOURL || "mongodb://localhost:27017/passport-mongo",
    loggerENV: process.env.LOGGER_ENV,
};

console.log(configENV);

const config = {
    db: {
        connstr: configENV.mongoURL,
        options: { useNewUrlParser: true, useUnifiedTopology: true },
    },
    srv: {
        logger: configENV.loggerENV,
    },
};

module.exports = config;
