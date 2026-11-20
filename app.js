import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Game API berjalan" });
});

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
  });
});