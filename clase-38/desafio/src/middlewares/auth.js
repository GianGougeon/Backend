const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.render("login");
  }
};
module.exports = auth;