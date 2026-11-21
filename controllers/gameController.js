import Game from "../models/Game.js";

// Menangani error supaya jawaban konsisten
const handleError = (res, error) => {
  if (error.name === "ValidationError" || error.name === "CastError") {
    return res.status(400).json({ message: error.message });
  }
  return res.status(500).json({ message: error.message });
};

// CREATE: tambah game baru
export const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    res.status(201).json(game);
  } catch (error) {
    handleError(res, error);
  }
};

// READ: ambil semua game
export const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    handleError(res, error);
  }
};

// READ: ambil satu game berdasarkan id
export const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game tidak ditemukan" });
    }
    res.status(200).json(game);
  } catch (error) {
    handleError(res, error);
  }
};

// UPDATE: ubah data game
export const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!game) {
      return res.status(404).json({ message: "Game tidak ditemukan" });
    }
    res.status(200).json(game);
  } catch (error) {
    handleError(res, error);
  }
};

// DELETE: hapus game
export const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game tidak ditemukan" });
    }
    res.status(200).json({ message: "Game berhasil dihapus" });
  } catch (error) {
    handleError(res, error);
  }
};