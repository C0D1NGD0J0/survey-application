const router = require("express").Router();
const passport = require("passport");
const authCntrl = require('../Controllers/auth');

router.get("/auth/google", authCntrl.google);

router.get("/auth/google/callback", authCntrl.googleCB, (req, res) =>{
	res.redirect("/surveys");
});

router.get("/api/logout", (req, res, next) =>{
	req.logout();
	res.redirect("/");
});

router.get("/api/current_user", (req, res, next) =>{
	res.send(req.user);
});

module.exports = router;