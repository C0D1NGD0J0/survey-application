import React, {PureComponent} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navigation/Navbar";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends PureComponent{
	componentDidMount(){
		this.props.fetchUser();
	}

	render(){
		return(
			<Router>
				<div>
					<Navbar />
					{/*<Route exact path="/" component={Header} />
					<Route exact path="/surveys" component={SurveysPage} />
					<Route path="/surveys/new" component={SurveyNewPage} />
					<Route path="/dashboard" component={Dashboard} />*/}
				</div>
			</Router>
		);
	}
}

export default connect(null, actions)(App);