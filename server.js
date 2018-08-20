require('dotenv').config();
const express = require("express");
const app = express();
const PORT = (process.env.PORT || 3000);

app.listen(PORT, (err) =>{
	if(err) return console.log("Server error on init: ", err);
	return console.log(`App is live on port ${PORT}`);
});