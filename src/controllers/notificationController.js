const admin = require("../config/firebaseConfig");

const sendNotification = async (req, res) => {
  try {
    const { deviceToken } = req.body;

    if (!deviceToken) {
      return res.status(400).json({ message: "Device token is required" });
    }

    const message = {
      notification: {
        title: "Welcome to MyApp",
        body: "Thank you for signing up! Stay tuned for updates and alerts.",
      },
      token: deviceToken,
    };

    await admin.messaging().send(message);
    res.status(200).json({ message: "Push notification sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send notification", error });
  }
};

module.exports = { sendNotification };
