import React, {PureComponent} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navigation/Navbar";

class App extends PureComponent{
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

export default App;