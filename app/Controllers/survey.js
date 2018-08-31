const Survey = require("../Models/Survey");

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
	}
}


module.exports = surveyCntrl;