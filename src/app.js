const express = require("express");
require("dotenv").config();
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(express.json());
app.use("/api", notificationRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});