const router = require("express").Router();
const surveyCntrl = require("../Controllers/survey");
const helper = require("../Config/middlewares");

router.get("/surveys/success", surveyCntrl.completed);
router.post("/surveys", helper.isLoggedIn, helper.hasCredit, surveyCntrl.create);

module.exports = router;