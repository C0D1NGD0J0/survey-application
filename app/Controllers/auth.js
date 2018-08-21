"use strict";
const mongoose = require('mongoose');
const passport = require('passport');
const passportConfig = require("../Config/passport");

const authCntrl = {
	google: passport.authenticate("google", {scope: ["profile", "email"]}),

	googleCB: passport.authenticate("google"),
}

module.exports = authCntrl;