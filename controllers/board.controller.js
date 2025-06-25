import Board from "../models/board.model.js";

export const getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.status(200).json(boards);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createBoard = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Board name is required" });

    const newBoard = new Board({ name });
    await newBoard.save();

    res.status(201).json(newBoard);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
