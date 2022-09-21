import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/User.js";
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
export default passport;
