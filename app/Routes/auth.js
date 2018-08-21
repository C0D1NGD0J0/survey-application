const router = require("express").Router();
const passport = require("passport");
const authCntrl = require('../Controllers/auth');

router.get("/auth/google", authCntrl.google);

router.get("/auth/google/callback", authCntrl.googleCB);

router.get("/logout", (req, res, next) =>{
	req.logout();
	res.send(req.user);
});

module.exports = router;