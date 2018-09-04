import React, { Component } from 'react';
import "./dashboard.css";
import Payment from "../Payments/Payment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component{
	render(){
		const { auth } = this.props;
		
	  return (
	 		<div className="row">
	 			<div className="col-sm-12">
					<h1 className="page-header">Welcome,</h1>
	 			</div>
	 			<div className="card-list">
					<div className="col-md-4 mb-2">
						<div className="card-list-item" style={{color: "#ffffff"}}>
							<i className="fas fa-dollar-sign fa-3x"></i>
							<h2 className="text-center text-uppercase">Add Credit</h2>
							<Payment text={"click here"} fontAwesome={""} />
						</div>
					</div>

					<div className="col-md-4 mb-2">
						<Link to="/surveys/new">
							<div className="card-list-item">
								<i className="fas fa-plus fa-3x"></i>
								<h2 className="text-center text-uppercase">Create Campaign</h2>
							</div>
						</Link>
					</div>

					<div className="col-md-4 mb-2">
						<a href="#!">
							<div className="card-list-item">
								<h2 className="text-center">{auth ? auth.credits : "N/A"} <small>units</small></h2>
								<h2 className="text-center text-uppercase">Credit Balance</h2>
							</div>
						</a>
					</div>

					<div className="col-sm-8 col-md-8 mb-2">
						<a href="#!">
							<div className="card-list-item">
								<i className="fas fa-eye fa-3x"></i>
								<h2>View All Campaigns (15)</h2>
							</div>
						</a>
					</div>

					<div className="col-sm-4 col-md-4 mb-2">
						<a href="#!">
							<div className="card-list-item">
								<i className="fas fa-file-import fa-3x"></i>
								<h2 className="text-uppercase text-center">CSV Upload</h2>
							</div>
						</a>
					</div>
	 			</div>
	 		</div>
	  );
	}
};

function mapStateToProps(state){
	return{auth: state.auth};
}

export default connect(mapStateToProps, null)(Dashboard);