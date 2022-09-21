import passport from "passport";
import { OAuth2Strategy } from "passport-google-oauth";

passport.use(
  "auth-google",
  new OAuth2Strategy(
    {
      clientID: "",
      clientSecret: "",
      callbackURL: "http://localhost:3000/auth/google",
    },
    function (accessToken, refreshToken, profile, done) {
      const userProfile = profile;
      done(null, userProfile);
    }
  )
);
