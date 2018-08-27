"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const SurveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [String]
});

module.exports = mongoose.model("Survey", SurveySchema);