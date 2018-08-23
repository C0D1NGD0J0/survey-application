const router = require("express").Router();
const passport = require("passport");
const authCntrl = require('../Controllers/auth');

router.get("/auth/google", authCntrl.google);

router.get("/auth/google/callback", authCntrl.googleCB);

router.get("/api/logout", (req, res, next) =>{
	req.logout();
	res.send(req.user);
});

router.get("/api/current_user", (req, res, next) =>{
	res.send(req.user);
});

module.exports = router;