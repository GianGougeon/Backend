const { transports, createLogger, format } = require("winston");

require("dotenv").config();
// directorio raiz
let rootDir = process.cwd();



// winston logger
function buildProdLogger() {
    const prodLogger = createLogger({
        format: format.combine(
            format.timestamp({
                format: "YYYY-MM-DD/HH:mm:ss",
            }),
            format.json()
        ),
        transports: [
            new transports.File({
                filename: `${rootDir}/src/logs/info.log`,
                level: "info",
            }),
            new transports.File({
                filename: `${rootDir}/src/logs/warn.log`,
                level: "warn",
            }),
            new transports.File({
                filename: `${rootDir}/src/logs/error.log`,
                level: "error",
            }),
        ],
    });
    return prodLogger;
}

function buildDevLogger() {
    const devLogger = createLogger({
        format: format.combine(
            format.timestamp({
                format: "YYYY-MM-DD/HH:mm:ss",
            }),
            format.json()
        ),
        transports: [
            new transports.Console({
                level: "info",
            }),
        ],
    });
    return devLogger;
}

let logger = null;

if (process.env.LOGGER_ENV === "PROD") {
    logger = buildProdLogger();
} else {
    logger = buildDevLogger();
}

module.exports = logger;
