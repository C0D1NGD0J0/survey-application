"use strict";
const mongoose = require("mongoose");
const Recipient = require("./Recipient");
const { Schema } = mongoose;

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


mongoose.model("Survey", SurveySchema);