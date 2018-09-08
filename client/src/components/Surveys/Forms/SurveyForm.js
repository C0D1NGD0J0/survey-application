import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { emailValidation } from "../../../utils/validation";
import formFields from "./formFields";

class SurveyForm extends Component {
	renderFields(){
		return formFields.map((obj) =>(
			<Field key={obj.name} type="text" name={obj.name} component={SurveyField} label={obj.label} placeholder={obj.placeholder} />
		));
	}

	render(){
		return(
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}

					<button type="submit" className="btn btn-success btn-md pull-right">NEXT <i className="fas fa-long-arrow-alt-right"></i></button>
					<a href="/dashboard" className="btn btn-danger btn-md pull-left">CANCEL <i className="fas fa-ban"></i></a>
				</form>
			</div>
		)
	}
}

function validate(values){
	const errors = {};	
	
	errors.recipients = emailValidation(values.recipients || "");

	formFields.forEach(({name}) =>{
		if(!values[name]){
			errors[name] = `You must provide Survey ${name}`;
		};
	});

	return errors;
};

export default reduxForm({
	validate,
	form: "surveyForm",
	destroyOnUnmount: false
})(SurveyForm);
