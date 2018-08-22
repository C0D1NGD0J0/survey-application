const passport  = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../Models/User");

passport.serializeUser((user, done) =>{
	done(null, user.id);
});

passport.deserializeUser((id, done) =>{
	User.findById(id, function(err, user){
		done(err, user);
	});
});

passport.use(
	new GoogleStrategy({
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: "/auth/google/callback",
		proxy: true
	},
	async (accessToken, refreshToken, profile, done) =>{
		const existing_user = await User.findOne({googleId: profile.id});
		if(existing_user) return done(null, existing_user);
		const newuser = await new User({
			googleId: profile.id, 
			email: profile.emails[0].value,
			avatar: profile.photos[0].value
		}).save();
			done(null, newuser);
	}
));