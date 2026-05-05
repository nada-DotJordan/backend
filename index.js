const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api/users", require("./routes/users.route"));
app.use("/api/posts", require("./routes/posts.route"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));