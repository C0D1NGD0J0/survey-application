const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const SENDGRID_KEY = process.env.SENDGRID_API_KEY;

class Mailer extends helper.Mail{
	constructor({subject, recipients}, content){
		super();
		
		this.sendgridAPI = sendgrid(SENDGRID_KEY);
		this.from_email = new helper.Email("no-reply@snapsurvey.com");
		this.subject = subject;
		this.body = new helper.Content("text/html", content);
		this.recipients = this.formatAddresses(recipients);

		this.addContent(this.body);
		this.addClickTracking();
		this.addRecipients();
	}

	formatAddresses(recipients){
		return recipients.map(({email}) =>{
			return new helper.Email(email);
		});
	}

	addClickTracking(){
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients(){
		const personalize = new helper.Personalization();
		this.recipients.forEach(recipient =>{
			personalize.addTo(recipient);
		});

		this.addPersonalization(personalize);
	}

	async send(){
		try {
			const request = this.sendgridAPI.emptyRequest({
				method: "POST",
				path: "/v3/mail/send",
				body: this.toJSON()
			});

			const response = this.sendgridAPI.API(request);
			console.log("RESPONSE: ", response);
			return response;
		} catch(err) {
			console.log("Error: ", err.response.body.errors);
		}
	}
}

module.exports = Mailer;