import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./layouts/Navigation/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home";
import SurveysList from "./Surveys/surveysList";
import SurveyNew from "./Surveys/createSurvey";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component{
	componentDidMount(){
		this.props.fetchUser();
	}

	render(){
		return(
			<Router>
				<div>
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route exact path="/surveys" component={SurveysList} />
					<Route path="/surveys/new" component={SurveyNew} />
					<Route path="/dashboard" component={Dashboard} />
				</div>
			</Router>
		);
	}
}

export default connect(null, actions)(App);