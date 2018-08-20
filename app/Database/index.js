const mongoose = require("mongoose");
const isProduction = (process.env.NODE_ENV === "production");
const REMOTE_DB = process.env.REMOTE_DB_URI;
const LOCAL_DB  = process.env.LOCAL_DB_URI;

mongoose.Promise = global.Promise;

if(isProduction){
	mongoose.connect(REMOTE_DB, { useNewUrlParser: true }, function(err) {		
  	if (err) console.log(err);
  	console.log("Connected to remote database");
	});
} else {
	mongoose.connect(LOCAL_DB, { useNewUrlParser: true }, (err) => {
		if(err) console.log("Mongoose connection error occurred ", err);
		console.log('Connected to local database');
	});
}

module.exports = mongoose;