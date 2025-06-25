import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo"
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low"
    },
    assignedTo: { type: String, required: true },
    dueDate: { type: Date, required: true },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Task", taskSchema);
