module.exports = {
	isLoggedIn: (req, res, next) =>{
		if(req.isAuthenticated()){
			return next();
		}

		res.status(401).send("You must login to continue").redirect('/');
	},

	hasCredit: (req, res, next) =>{
		const _user = req.user;

		if(_user.credits > 1){
			return next();
		} 
		
		return res.status(403).send({error: "Currently out of credits!"});
	}
}