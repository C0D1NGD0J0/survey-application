import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index";
import App from "./components/App";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		<div className="container">
			<App />
		</div>
	</Provider>, 
	document.getElementById("root")
);