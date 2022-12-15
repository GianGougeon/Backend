import config from "../utils/config.js";
import NoticiasDAOMem from "../services/NoticiasDAO.mem.js";
import NoticiasDAOFile from "../services/NoticiasDAO.file.js";
import NoticiasDAOMongoDB from "../services/NoticiasDAO.mongodb.js";

class NoticiasDAOFactory {
  static get() {
    switch (config.srv.persistencia) {
      case "MEMORIA":
        console.log("Persistencia: ", config.srv.persistencia);
        return new NoticiasDAOMem();
      case "FILE":
        return new NoticiasDAOFile();
      case "MONGODB":
        return new NoticiasDAOMongoDB();
      default:
        return; //DAO mem;
    }
  }
}

export default NoticiasDAOFactory;
