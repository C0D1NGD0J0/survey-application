"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	googleId: {
		type: String,
		required: true
	},
	email: String,
	avatar: String
});

module.exports = mongoose.model("User", UserSchema);