import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    genre: { type: String, required: true },
    platform: { type: String, required: true },
    rating: { type: Number, min: 1, max: 10, default: 5 },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

export default Game;