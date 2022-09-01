import User from "./User.js";
import Post from "./Post.js";

Post.belongsTo(User);

export { User, Post };
