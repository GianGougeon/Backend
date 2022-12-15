import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + ".env"),
});

const config = {
  mongodb: {
    connstr: `mongodb://${process.env.HOSTDB || "localhost"}:${
      process.env.PORTDB || 27017
    }/clase41`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  filedb: {
    pathdb: "./DB",
  },
  srv: {
    entorno: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3001,
    logger: process.env.LOG || "DEV",
    persistencia: process.env.PERSISTENCIA || "MONGODB",
  },
};

console.log(config);

export default config;
