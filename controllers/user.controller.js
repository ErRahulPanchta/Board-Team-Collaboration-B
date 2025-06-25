import User from "../models/user.model.js";


export const saveUser = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;

    let user = await User.findOne();

    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.avatar = avatar || user.avatar;
      await user.save();
    } else {
      user = await User.create({ name, email, avatar });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error("User Save Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};



export const getUser = async (req, res) => {
  try {
    const user = await User.findOne();
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    console.error("Fetch User Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
