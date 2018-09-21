const router = require("express").Router();
const surveyCntrl = require("../Controllers/survey");
const helper = require("../Config/middlewares");

router.get("/surveys/:serveyId/:choice", surveyCntrl.completed);
router.post("/surveys/webhooks", surveyCntrl.webhooks);
router.post("/surveys", helper.isLoggedIn, helper.hasCredit, surveyCntrl.create);

module.exports = router;