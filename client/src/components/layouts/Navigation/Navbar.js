import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Payment from "../../Payments/Payment";

class Navbar extends Component {

	isAuthenticated = () =>{
		const {auth} = this.props;
		
		if(auth !== null && auth !== false){
			return true;
		}

		return false;
	}

	renderNavContent = () =>{
		const { auth } = this.props;

		return(
			<React.Fragment>
				<li><a href="#!">Credits <span className="badge">{auth.credits}</span></a></li>
				<li className="dropdown">
		      <Link to="/dashboard" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{auth.email} <span className="caret"></span></Link>
		      <ul className="dropdown-menu">
		        <li><Link to="/surveys/new">Create Survey <i className="fas fa-plus"></i></Link></li>
		        <li><Link to="#!"><Payment text={"Add Credit"} fontAwesome={<i className="fas fa-dollar-sign"></i>}/></Link></li>
		        <li><Link to="/dashboard">Settings <i className="fas fa-cogs"></i></Link></li>
		        <li role="separator" className="divider"></li>
		        <li><a href="/api/logout">Logout <i className="fas fa-power-off"></i></a></li>
		      </ul>
		    </li>
		  </React.Fragment>
		);
	}

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
			      <Link 
			      	className="navbar-brand"
			       	to={this.props.auth ? "/dashboard" : "/"}
			      >
			      	SnapSurvey
			      </Link>
			    </div>

			    <div id="navbar" className="collapse navbar-collapse">
			      <ul className="nav navbar-nav navbar-right">
							<li><Link to={this.props.auth ? "/dashboard" : "/"}>Home <i className="fas fa-home"></i></Link></li>
							{
								this.isAuthenticated() ? this.renderNavContent() 
								: <li><a href="/auth/google">Login with Google <i className="fab fa-google-plus 2x"></i></a></li>
							}
				  	</ul>
			    </div>
			  </div>
			</nav>
		);
	}
}

function mapStateToProps(state){
	return { auth: state.auth };
};

export default connect(mapStateToProps, null)(Navbar);