import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { emailValidation } from "../../../utils/validation";

const FIELDS = [
	{label: "Survey Title", name: "title", placeholder: "Enter Survey Title"},
	{label: "Subject Line", name: "subject", placeholder: "Enter Survey Subject Line"},
	{label: "Email Body", name: "body", placeholder: "Enter Survey Content"},
	{label: "Recipients List", name: "emails", placeholder: "Enter Recipients Email"}
];

class SurveyForm extends Component {
	renderFields(){
		return FIELDS.map((obj) =>(
			<Field key={obj.name} type="text" name={obj.name} component={SurveyField} label={obj.label} placeholder={obj.placeholder} />
		));
	}

	render(){
		return(
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<button type="submit" className="btn btn-success btn-md pull-right">NEXT <i className="fas fa-check"></i></button>
					<button type="submit" className="btn btn-danger btn-md pull-left">CANCEL <i className="fas fa-ban"></i></button>
				</form>
			</div>
		)
	}
}

function validate(values){
	const errors = {};	
	
	errors.emails = emailValidation(values.emails || "");

	FIELDS.forEach(({name}) =>{
		if(!values[name]){
			errors[name] = `You must provide Survey ${name}`;
		};
	});

	return errors;
};

export default reduxForm({
	validate,
	form: "surveyForm"
})(SurveyForm);
