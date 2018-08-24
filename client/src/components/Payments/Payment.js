import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Payment extends Component {
	render() {
		const mystlye = {textDecoration: "none", display: "hidden", cursor: "pointer"};

		return (
			<StripeCheckout 
				name="SnapSurvey"
				description="$5 for 5 email credits..."
				amount={500}
				token={token => this.props.handleStripeToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<span style={mystlye}> {this.props.text} {this.props.fontAwesome}</span>
			</StripeCheckout>
		);
	}
}

Payment.defaultProps = {
	text: null,
	fontAwesome: null
}

export default connect(null, actions)(Payment);