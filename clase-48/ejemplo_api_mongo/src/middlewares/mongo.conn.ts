import { MongoClient } from "../../deps.ts";
import logger from "./logger.ts";

const MONGO_URI = `mongodb://127.0.0.1:27017/clase48`;

const client = new MongoClient();

try {
  await client.connect(MONGO_URI);
  logger.debug(`Base de datos conectada ${MONGO_URI}`);
} catch (error) {
  logger.error(error);
}

const dbConn = client.database("clase48");

export default dbConn;
