require('dotenv').config();
const express = require("express");
const app = express();
const PORT = (process.env.PORT || 3000);

// DATABASE
require("./app/Database");

// MIDDLEWARES
require("./app/Config/passport");

// ROUTES
app.use(require("./app/Routes/auth"));

// SERVER INIT
app.listen(PORT, (err) =>{
	if(err) return console.log("Server error on init: ", err);
	return console.log(`App is live on port ${PORT}`);
});