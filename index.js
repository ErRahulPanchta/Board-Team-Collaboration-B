import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import 'dotenv/config';

import boardRoutes from "./routes/board.route.js"
import taskRoutes from "./routes/task.route.js"
import userRoutes from "./routes/user.routes.js"

const app = express();


app.use(cors({
  origin: process.env.FRONTEND_URL,  
  credentials: true                 
}));

app.use(express.json());
app.use(helmet({
  crossOriginResourcePolicy: false
}));


app.use("/api", boardRoutes)
app.use("/api", taskRoutes)
app.use("/api", userRoutes)



app.get("/", (req, res) => {
  res.send("Task Board API is running");
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("Server started on port", process.env.PORT || 8080);
    });
  })
  .catch((err) => console.error("DB connection error:", err));
