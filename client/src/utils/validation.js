const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function emailValidation (emails){
	const invalidEmails = emails.split(",").map((email) => email.trim().slice(",", -1)).filter((email) => EMAIL_REGEX.test(email) === false);

	if(invalidEmails){
		return `These emails are invalid: ${invalidEmails}`;
	}
}

export function generalValidation(fields, values){
	const errors = {};
	const {title, body, recipients, subject} = values;
	
	fields.forEach(({name}) =>{
		if(!values[name]){
			errors[name] = `You must provide a Survey ${name}`;
		};
	});

	return errors;
}

// import { generalValidation } from "../../../utils/validation";