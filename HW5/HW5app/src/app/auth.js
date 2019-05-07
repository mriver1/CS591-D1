const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: "924383703973-tdpo13fjfmpguvlplqmqru0knuln7797.apps.googleusercontent.com",
            clientSecret: "j6ixxzFLmklOb6-bTrs2-6RK", 
            callbackURL: "http://localhost:4200/auth/google/callback"
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};

