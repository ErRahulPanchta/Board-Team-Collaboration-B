import Task from "../models/task.model.js";


export const getTasksByBoardId = async (req, res) => {
  try {
    const boardId = req.params.id;
    const tasks = await Task.find({ board: boardId });

    if (!tasks.length) {
      return res.status(404).json({ message: "No tasks found for this board" });
    }

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createTaskInBoard = async (req, res) => {
  try {
    const boardId = req.params.id;
    const { title, description, status, priority, assignedTo, dueDate } = req.body;

    const newTask = new Task({
      title,
      description,
      status,
      priority,
      assignedTo,
      dueDate,
      board: boardId
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updated = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
      runValidators: true
    });

    if (!updated) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deleted = await Task.findByIdAndDelete(taskId);

    if (!deleted) return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
