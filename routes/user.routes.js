import express from "express";
import { getUser, saveUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/user", getUser);
router.post("/user", saveUser);  

export default router;
