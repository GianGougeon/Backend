const tweetBank = require("../tweetBank");

class Tweet {
  static getAll() {
    const tweets = tweetBank.list();
    return tweets;
  }

  static create(name, content) {
    const tweet = tweetBank.add(name, content);
    return tweet;
  }
  static delete(id) {
    tweetBank.remove(id);
  }
  static update(id, newContent) {
    tweetBank.update(id, newContent);
  }
}

module.exports = Tweet;
