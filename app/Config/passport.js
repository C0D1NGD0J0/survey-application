const passport  = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) =>{
	console.log("Access token: ", accessToken);
	console.log("Refresh Token: ", refreshToken);
	console.log("Profile: ", profile);
}));