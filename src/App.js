import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginRegister from "./components/LoginRegister"; // ✅ 引入美化组件

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    if (token) fetchHistory();
  }, [token]);

  const fetchHistory = async () => {
    try {
      const res = await axios.get("http://localhost:5050/history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch history", err);
    }
  };

  const askQuestion = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5050/ask",
        { question },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAnswer(res.data.answer);
      fetchHistory();
    } catch (err) {
      console.error("❌ Failed to get answer", err);
      setAnswer("Error: Unable to get response.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsLoggedIn(false);
    setAnswer("");
    setHistory([]);
  };

  const clearHistory = async () => {
    try {
      await axios.delete("http://localhost:5050/history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory([]);
    } catch (err) {
      console.error("❌ Failed to clear history", err);
    }
  };

  // ✅ 如果没登录，显示 LoginRegister 组件
  if (!isLoggedIn) {
    return <LoginRegister setIsLoggedIn={setIsLoggedIn} setToken={setToken} />;
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🧠 AI Q&A Platform</h1>
      

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask me anything..."
        style={{ width: "300px", padding: "8px", marginRight: "10px" }}
      />
      <button onClick={askQuestion} style={{ padding: "8px" }}>Ask</button>
      <button onClick={handleLogout} style={{ marginBottom: "1rem" }}>退出登录</button>

      <div style={{ marginTop: "20px" }}>
        <strong>Answer:</strong>
        <p>{answer}</p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>🕓 History</h2>
        <button onClick={clearHistory} style={{ marginBottom: "10px", padding: "6px" }}>
          Clear History
        </button>
        {history.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1rem",
              padding: "10px",
              border: "1px solid #ddd",
            }}
          >
            <p><strong>Q:</strong> {item.question}</p>
            <p><strong>A:</strong> {item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
