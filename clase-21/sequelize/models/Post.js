import { DataTypes, Model } from "sequelize";
import db from "../db/index.js";

// Modelo del post
class Post extends Model {}
Post.init(
  {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    // tableName: "posts",
  }
);

export default Post;
