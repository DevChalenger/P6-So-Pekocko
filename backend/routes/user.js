const express = require("express");
const router = express.Router();

const password = require("../middleware/passwordMiddleware");
const userControl = require("../controllers/user");

router.post("/signup", password, userControl.signup);
router.post("/login", userControl.login);

module.exports = router;
