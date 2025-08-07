// 1. 基础配置
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// 2. MongoDB 连接
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// 3. 模型导入
const Question = require("./models/Question");
const User = require("./models/User");

// 4. JWT 工具函数
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET); // 👈 生产环境改为 process.env.JWT_SECRET
};

// 5. 登录 & 注册接口 ✨ ✨（添加在这里）
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const newUser = new User({ email, password });
    await newUser.save();

    const token = generateToken(newUser._id);
    res.json({ token, user: { email: newUser.email } });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = generateToken(user._id);
    res.json({ token, user: { email: user.email } });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// 6. 其他接口（/ask, /history 等）
app.post("/ask", async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: "No question provided" });

  try {
    const completion = await axios.post("http://localhost:11434/api/generate", {
      model: "deepseek-coder:instruct",
      prompt: question,
      stream: false,
    });

    const answer = completion.data.response;

    // 存入数据库
    const newQA = new Question({ question, answer });
    await newQA.save();

    res.json({ answer });
  } catch (err) {
    console.error("❌ Ollama error:", err.message);
    res.status(500).json({ error: "Ollama (local) error" });
  }
});


app.get("/history", async (req, res) => {
  try {
    const history = await Question.find().sort({ createdAt: -1 }).limit(10);
    res.json(history);
  } catch (err) {
    console.error("❌ Failed to fetch history:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// 7. 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// 清空历史记录
app.delete("/history", async (req, res) => {
  try {
    await Question.deleteMany({});
    res.json({ message: "History cleared successfully" });
  } catch (err) {
    console.error("❌ Failed to clear history:", err);
    res.status(500).json({ error: "Server error" });
  }
});
