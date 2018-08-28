require('dotenv').config();
const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");
const PORT = (process.env.PORT || 5000);
const bodyParser = require("body-parser");
const isProductionEnv = (process.env.NODE_ENV === "production");

// DATABASE
require("./app/Database");

// MIDDLEWARES
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, //30days in milliseconds
		keys: [process.env.COOKIE_SECRET]
	})
);
app.use(bodyParser.json());
require("./app/Config/passport");
app.use(passport.initialize());
app.use(passport.session());

// MODELS
require('./app/Models/User');
require('./app/Models/Survey');
require('./app/Models/Recipient');

// ROUTES
app.use(require("./app/Routes/auth"));
app.use(require("./app/Routes/billing"));

if(isProductionEnv){
	//express will server up production assets files
	app.use(express.static(__dirname + "/client/build"));

	//express will serve up index.html file if it doesn't recognize the route
	const path = require("path");
	app.get("*", (req, res) =>{
		res.sendFile(path.resolve(__dirname, "/client", "build", "index.html"));
	});
}

// SERVER INIT
app.listen(PORT, (err) =>{
	if(err) return console.log("Server error on init: ", err);
	return console.log(`App is live on port ${PORT}`);
});