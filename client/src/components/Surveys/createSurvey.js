import React, {Component} from 'react';
import SurveyForm from "./Forms/SurveyForm";

class SurveyNew extends Component {
	render(){
		return(
			<div className="row">
				<div className="col-md-8">
					<h3 className="page-header">Create New Survey</h3>
					<SurveyForm />
				</div>

				<div className="col-md-3 col-md-offset-1">
					<div className="sidebar">

					</div>
				</div>
			</div>
		)
	}
}

export default SurveyNew;
