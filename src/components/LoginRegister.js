import React, { useState } from "react";
import axios from "axios";

const LoginRegister = ({ setIsLoggedIn, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (type) => {
    try {
      const res = await axios.post(`http://localhost:5050/${type}`, { email, password });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setIsLoggedIn(true);
    } catch (err) {
      alert(`${type === "login" ? "登录" : "注册"}失败：` + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to AI Q&A</h2>
      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => handleAuth("login")}>登录</button>
        <button style={{ ...styles.button, background: "#4CAF50" }} onClick={() => handleAuth("register")}>
          注册
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fdfdfd",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "5px",
  },
};

export default LoginRegister;
