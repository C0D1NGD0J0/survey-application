import React from 'react';
import { connect } from "react-redux";
import formFields from "./formFields";

const SurveyFormReview = ({onCancel, formValues}) => {
	const reviewFields = formFields.map(({name, label}) =>{
		return(
			<React.Fragment>
				<li key={name}>
					<label>{label}</label>
					<p style={{"paddingLeft": "15px"}}>{formValues[name]}</p>
				</li>
			</React.Fragment>
		)
	});

  return (
  	<div>
  		<h5 className="page-header">Please confirm your survey entries</h5>
			<div className="row">
				<div className="col-md-12">
					<div className="panel panel-success">
						<div className="panel-heading"><h2>{formValues.title}</h2></div>

						<div className="panel-body">
							<ul className="list-unstyled">
								{reviewFields}
							</ul>
						</div>
					</div>
				</div>
			</div>
  		<button className="btn btn-danger pull-left text-uppercase" onClick={onCancel}>
  			<i className="fas fa-long-arrow-alt-left"></i> Back
  		</button>

  		<button className="btn btn-success pull-right text-uppercase">
  			Send Survey <i className="fas fa-envelope"></i>
  		</button>
  	</div>
  );
};

function mapStateToProps(state){
	return {formValues: state.form.surveyForm.values};
};

export default connect(mapStateToProps)(SurveyFormReview);