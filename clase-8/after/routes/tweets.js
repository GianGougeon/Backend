const express = require("express");
const Tweet = require("../controllers/tweet.controller");
const tweetsRouter = express.Router();
const tweetBank = require("../tweetBank");

tweetsRouter.get("/", (req, res) => {
  const tweets = Tweet.getAll();
  res.send(tweets);
});

tweetsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(tweetBank.findOne(parseInt(id)));
});

tweetsRouter.post("/", (req, res) => {
  const { name, content } = req.body;
  const tweet = Tweet.create(name, content);
  res.status(201).send(tweet);
});

module.exports = tweetsRouter;
