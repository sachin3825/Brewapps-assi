const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

const bookRoutes = require("./routes/Book");
const database = require("./config/database");

dotenv.config();

const PORT = process.env.PORT || 4000;

database.connect();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/v1/books", bookRoutes);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
