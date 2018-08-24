import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index";
import App from "./components/App";
import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={store}>
		<div className="container" style={{paddingTop: "50px"}}>
			<App />
		</div>
	</Provider>, 
	document.getElementById("root")
);