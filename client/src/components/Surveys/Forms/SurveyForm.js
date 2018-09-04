import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

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
		))
	}

	render(){
		return(
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{this.renderFields()}
					<button type="submit" className="btn btn-primary btn-block">Submit</button>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: "surveyForm"
})(SurveyForm);
