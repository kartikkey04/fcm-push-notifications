const admin = require("firebase-admin");
require("dotenv").config();
const path = require("path");

const serviceAccount = require(path.join(__dirname, "../../firebase-adminsdk.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
