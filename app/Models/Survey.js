"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const SurveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [String],
	userResponses: {
		yes: {type: Number, default: 0},
		no: {type: Number, default: 0},
		note: {type: String, default: ""}
	}
});

module.exports = mongoose.model("Survey", SurveySchema);