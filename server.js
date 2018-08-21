require('dotenv').config();
const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");
const PORT = (process.env.PORT || 3000);

// DATABASE
require("./app/Database");

// MODELS
require('./app/Models/User');

// MIDDLEWARES
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, //30days in milliseconds
		keys: [process.env.COOKIE_SECRET]
	})
);
require("./app/Config/passport");
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use(require("./app/Routes/auth"));

// SERVER INIT
app.listen(PORT, (err) =>{
	if(err) return console.log("Server error on init: ", err);
	return console.log(`App is live on port ${PORT}`);
});