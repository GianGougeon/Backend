import { Router } from "express";
const router = Router();
import { Post, User } from "../models/index.js";

router.get("/", (req, res) => {
  Post.findAll({ include: { model: User } }).then((posts) => res.send(posts));
});

router.post("/", (req, res) => {
  const { username } = req.body;
  User.findOrCreate({ where: { username } }).then((data) => {
    const user = data[0];
    Post.create(req.body).then((newPost) => {
      newPost.setUser(user);
      res.status(201).send(newPost);
    });
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Post.findByPk(id).then((post) => res.send(post));
});

export default router;
