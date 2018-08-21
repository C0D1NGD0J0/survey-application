const passport  = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../Models/User");

passport.serializeUser((user, done) =>{
	done(null, user.id);
});

passport.deserializeUser((id, done) =>{
	User.findById(id).then((user) =>{
		done(null, user);
	});
});

passport.use(new GoogleStrategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: "/auth/google/callback",
	proxy: true
}, (accessToken, refreshToken, profile, done) =>{
	User.findOne({googleId: profile.id}, function(err, user){
		if(user){
			return done(null, user);
		} else {
			const newuser = new User({googleId: profile.id});
			newuser.save((err) =>{
				if(err) return console.log(err);
				done(null, user);
			});
		}
	});
}));