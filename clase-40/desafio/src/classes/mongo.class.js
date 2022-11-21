const CustomError = require("./error.class");
const DBClient = require("./dbclient.class");
const config = require("../utils/config");
const mongoose = require("mongoose");
const logger = require("../utils/logger");

class MongoDBClient extends DBClient {
    constructor() {
        super();
        this.connected = false;
        this.client = mongoose;
        console.log(config.db.connstr);
    }

    async connect() {
        try {
            await this.client.connect(config.db.connstr, config.db.options);
            this.connected = true;
            logger.info("Base de datos conectada");
        } catch (error) {
            const objErr = new CustomError(
                500,
                "Error al conectarse a mongodb",
                error
            );
            logger.error(objErr);
            throw objErr;
        }
    }

    async disconnect() {
        try {
            await this.client.connection.close();
            this.connected = false;
            console.log("Base de datos desconectada");
            logger.info("Base de datos desconectada");
        } catch (error) {
            const objErr = new CustomError(
                500,
                "Error al desconectarse a mongodb",
                error
            );
            logger.error(objErr);
            throw objErr;
        }
    }
}

module.exports = MongoDBClient;
