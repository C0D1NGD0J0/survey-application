import React, {PureComponent} from "react";
import { Link } from "react-router-dom";

class Navbar extends PureComponent {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <Link className="navbar-brand" to="/">SnapSurvey</Link>
			    </div>

			    <div id="navbar" className="collapse navbar-collapse">
			      <ul className="nav navbar-nav navbar-right">
							<li><Link to="/">Home <i className="fas fa-home"></i></Link></li>
					    <li><Link to="/auth/google">Login with Google <i className="fab fa-google-plus 2x"></i></Link></li>
				  	</ul>
			    </div>
			  </div>
			</nav>
		);
	}
}

export default Navbar;