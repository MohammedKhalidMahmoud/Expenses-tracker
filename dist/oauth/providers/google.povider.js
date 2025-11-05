import passport from "passport";
import GoogleStrategy from "passport-google-oidc";
import env from "../../utils/env-loader.util.js";
console.log("clientId", env.GOOGLE_CLIENT_ID);
console.log("clientSecret", env.GOOGLE_CLIENT_SECRET);
console.log("callbackURL", env.GOOGLE_CALLBACK_URL);
const strategy = new GoogleStrategy({
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: env.GOOGLE_CALLBACK_URL,
}, async (issuer, profile, done) => {
    try {
        console.log("🔹 Google profile:", profile);
        // Example of creating/finding a user
        const user = {
            id: profile.id,
            displayName: profile.displayName,
            email: profile.emails?.[0]?.value,
        };
        return done(null, user);
    }
    catch (err) {
        return done(err, null);
    }
});
passport.use(strategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
//# sourceMappingURL=google.povider.js.map