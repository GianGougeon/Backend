const passport = require("passport");
const { Strategy } = require("passport-local");
const bcrypt = require("bcrypt");
const User = require("../models/user.model.js");
const LocalStrategy = Strategy;

passport.use(
    new LocalStrategy((email, password, done) => {
        User.findOne({ email }, (err, user) => {
            if (err) console.log(err);
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) console.log(err);
                if (isMatch) return done(null, user);
                return done(null, false);
            });
        });
    })
);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    return done(null, user);
});
module.exports = passport;
