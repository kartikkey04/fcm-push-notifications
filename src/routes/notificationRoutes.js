const express = require("express");
const router = express.Router();

router.post("/send-notification", sendNotification);

module.exports = router;
