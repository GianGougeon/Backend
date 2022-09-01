import { Router } from "express";
const router = Router();
import { User } from "../models/index.js";

router.get("/", (req, res) => {
  User.findAll().then((users) => {
    res.send(users);
  });
});

router.get("/:username", (req, res) => {
  const { username } = req.params;
  User.findOne({ where: { username } }).then((user) => res.send(user));
});

export default router;
