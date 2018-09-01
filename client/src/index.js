import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index";
import App from "./components/App";
import { Provider } from "react-redux";
import axios from "axios";
import "./index.css";
window.axios = axios;

ReactDOM.render(
	<Provider store={store}>
		<div className="container">
			<App />
		</div>
	</Provider>, 
	document.getElementById("root")
);