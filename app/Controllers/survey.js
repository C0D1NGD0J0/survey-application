const Survey = require("../Models/Survey");
const Mailer = require("../Config/mailer");
const surveyTemplate = require("../Config/Mailer/survey_template");

const surveyCntrl = {
	create: async (req, res, next) =>{
		const { title, subject, body, recipients, userResponses } = req.body;
		
		const _survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(",").map(email => ({email: email.trim()})),
			_user: req.user.id
		});

		const mailer = new Mailer(_survey, surveyTemplate(_survey));
		try{
			await mailer.send();
			await _survey.save();
			req.user.credits -= 2.50;
			const user = await req.user.save();

			res.send(user);
		} catch(err){
			res.status(422).send(err);
		}
	},

	completed: (req, res, next) =>{
		res.send("Thanks for voting!");
	},

	webhooks: (req, res, next) =>{
		console.log(req.body);
		res.send({});
	}
}

module.exports = surveyCntrl;