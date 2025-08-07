# 🧠 AI Q&A Platform

An intelligent Q&A web application that allows users to register, log in, and interact with a local LLM (Ollama) for question answering. Query history is stored securely and can be managed by users.

## 🚀 Live Demo

- **Frontend (Vercel):** [https://your-vercel-app.vercel.app](https://your-vercel-app.vercel.app)
- **Backend (Render):** [[https://your-render-api.onrender.com](https://your-render-api.onrender.com)](https://ai-qa-platform.onrender.com)

## ✨ Features

- ✅ User authentication (Register/Login with JWT)
- 💬 Ask questions and get instant AI-powered answers
- 📜 View and manage your question history
- 🧹 Clear history manually
- 🌐 Full-stack deployment (Vercel + Render + MongoDB Atlas)

## 🛠️ Tech Stack

| Layer        | Tech                      |
|--------------|---------------------------|
| Frontend     | React + Vite + Axios      |
| Backend      | Node.js + Express         |
| AI Engine    | Ollama (`deepseek-coder`) |
| Database     | MongoDB Atlas + Mongoose  |
| Auth         | JWT                       |
| Deployment   | Vercel + Render           |

## 📁 Project Structure


## ⚙️ Local Setup

## 1. **Clone the repository**

### bash
git clone https://github.com/your-username/ai-qa-platform.git
cd ai-qa-platform

## 2. **Setup Backend
cd server
npm install
### Create .env file in server/:
MONGO_URI=your_mongodb_atlas_uri
PORT=5050
## 3. **Start backend server:
node index.js
## 4.**Setup Frontend
cd ../client
npm install
npm run dev
## 5.**Start Ollama locally
ollama run deepseek-coder:instruct
## 🔐 Environment Variables
| Variable    | Description                                  |
| ----------- | -------------------------------------------- |
| MONGO\_URI  | MongoDB connection string                    |
| PORT        | Backend server port                          |
| JWT\_SECRET | (optional, hardcoded in dev as `secret_key`) |
🌐 Deployment Notes
Frontend: Deployed via Vercel

Backend: Deployed via Render

Database: MongoDB Atlas (Cloud MongoDB)

🔒 Don't forget to whitelist your Render IPs in MongoDB Atlas
## ⭐ Star This Project
If you find this project helpful, feel free to star it on GitHub!



