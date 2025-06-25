import express from "express";
import { getBoards, createBoard } from "../controllers/board.controller.js";
import { getTasksByBoardId, createTaskInBoard } from "../controllers/task.controller.js";

const router = express.Router();

router.get("/boards", getBoards);
router.post("/boards", createBoard);
router.get("/boards/:id/tasks", getTasksByBoardId);
router.post("/board/:id/task", createTaskInBoard);

export default router;
