const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const billingCntrl = {
	charge: async(req, res, next) =>{
		const _charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			description: "$5 for 5 credits",
			source: req.body.id
		});

		console.log(_charge);
	}
};

module.exports = billingCntrl;