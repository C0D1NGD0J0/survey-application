const Survey = require("../Models/Survey");
const Mailer = require("../Config/mailer");
const surveyTemplate = require("../Config/Mailer/survey_template");

const surveyCntrl = {
	create: (req, res, next) =>{
		const { title, subject, body, recipients, userResponses } = req.body;
		
		const _survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(",").map(email => ({email: email.trim()})),
			_user: req.user.id
		});

		const mailer = new Mailer(_survey, surveyTemplate(_survey));
		mailer.send();
	}
}


module.exports = surveyCntrl;