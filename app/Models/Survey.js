"use strict";
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Recipient = require("./Recipient");

const SurveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [Recipient],
	userResponses: {
		yes: {type: Number, default: 0},
		no: {type: Number, default: 0}
	},
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	lastResponded: Date
}, {timestamps: true});


module.exports = mongoose.model("Survey", SurveySchema);