
import express from "express";
import { updateTask, deleteTask } from "../controllers/task.controller.js";

const router = express.Router();

router.put("/task/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
