const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const billingCntrl = {
	charge: async(req, res, next) =>{
		const _charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			description: "$5 for 5 credits",
			source: req.body.id
		});

		req.user.credits += 5;
		const user = await req.user.save();
		res.send(user);
	}
};

module.exports = billingCntrl;