const router = require("express").Router();
const billingCntrl = require("../Controllers/billing");
const helper = require("../Config/middlewares");

router.post("/api/stripe", helper.isLoggedIn, billingCntrl.charge);

module.exports = router;