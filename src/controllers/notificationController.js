const admin = require("firebase-admin");
const serviceAccount = require("../../firebase-adminsdk.json");

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

exports.sendNotification = async (req, res) => {
    const { deviceToken } = req.body;

    const message = {
        notification: {
            title: "Welcome to MyApp",
            body: "Thank you for signing up! Stay tuned for updates and alerts.",
        },
        token: deviceToken,
    };

    try {
        await admin.messaging().send(message);
        res.status(200).json({ message: "Push notification sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Notification sending failed", details: error });
    }
};