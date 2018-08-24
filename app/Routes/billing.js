const router = require("express").Router();
const billingCntrl = require("../Controllers/billing");

router.post("/api/stripe", billingCntrl.charge);

module.exports = router;