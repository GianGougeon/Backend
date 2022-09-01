import { Router } from "express";
const router = Router();
import postsRouter from "./posts.js";
import usersRouter from "./users.js";

router.use("/posts", postsRouter);
router.use("/users", usersRouter);

export default router;
