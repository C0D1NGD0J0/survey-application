const _ = require("lodash");
const Path = require("path-parser").default;
const { URL } = require("url");
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
		const events = _.map(req.body, ({email, url}) =>{
			const pathname = new URL(url).pathname;
			const p = new Path("/api/surveys/:surveyId/:choice");
			const match = p.test(pathname); //returns an object or null
			if(match){
				return {email, surveyId: match.surveyId, choice: match.choice}
			}
		});
		
		const compactEvents = _.compact(events); //removes undefined from array.
		const uniqueEvents = _.uniqBy(compactEvents, "email", "surveyId"); //removes duplicate based on criteria provided

		res.send({});
	}
}

module.exports = surveyCntrl;