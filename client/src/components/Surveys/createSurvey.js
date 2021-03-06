import React, {Component} from 'react';
import { reduxForm } from "redux-form";
import SurveyForm from "./Forms/SurveyForm";
import SurveyFormReview from "./Forms/SurveyReview";

class SurveyNew extends Component {
	state = { showFormReview: false }
	
	renderContent(){
		if(this.state.showFormReview){
			return (
				<React.Fragment>
					<SurveyFormReview onCancel={() => this.setState({showFormReview: false})} />
				</React.Fragment>
			)
		}

		return (
			<React.Fragment>
				<h3 className="page-header">Create New Survey</h3>
				<SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})}/>
			</React.Fragment>
		);
	}

	render(){
		return(
			<div className="row">
				<div className="col-md-8">
					{this.renderContent()}
				</div>

				<div className="col-md-3 col-md-offset-1">
					<div className="sidebar">

					</div>
				</div>
			</div>
		)
	}
}

export default reduxForm({
	form: "SurveyForm"
})(SurveyNew);
