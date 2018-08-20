require('dotenv').config();
const express = require("express");
const app = express();
const passport = require("passport");
const PORT = (process.env.PORT || 3000);
const passportConfig = require("./app/Helpers/passport");

app.get("/auth/google", passport.authenticate("google", {
	scope: ["profile", "email"]
}));

app.get("/auth/google/callback", passport.authenticate("google"));


app.listen(PORT, (err) =>{
	if(err) return console.log("Server error on init: ", err);
	return console.log(`App is live on port ${PORT}`);
});