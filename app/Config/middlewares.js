module.exports = {
	isLoggedIn: (req, res, next) =>{
		if(req.isAuthenticated()){
			return next();
		}

		res.status(401).send("You must login to continue").redirect('/');
	}
}