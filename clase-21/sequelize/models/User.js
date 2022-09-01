import { DataTypes, Model } from "sequelize";
import db from "../db/index.js";

// Modelo del usuario
class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    //  tableName: "users"
  }
);

export default User;
