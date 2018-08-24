import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";

class Payment extends Component {
	render() {
		const mystlye = {textDecoration: "none", display: "hidden", cursor: "pointer"};

		return (
			<StripeCheckout 
				name="SnapSurvey"
				description="$5 for 5 email credits..."
				amount={500}
				token={token => console.log(token)}
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

export default Payment;