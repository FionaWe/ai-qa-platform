

```markdown
# 🧠 AI Q&A Platform

An intelligent Q&A web application that allows users to register, log in, and interact with a local LLM (Ollama) for question answering. Query history is stored securely and can be managed by users.

## 🚀 Live Demo

- **Frontend (Vercel):** [https://your-vercel-app.vercel.app](https://your-vercel-app.vercel.app)
- **Backend (Render):** [https://your-render-api.onrender.com](https://your-render-api.onrender.com)

## ✨ Features

- ✅ User authentication (Register/Login with JWT)
- 💬 Ask questions and get instant AI-powered answers
- 📜 View and manage your question history
- 🧹 Clear history manually
- 🌐 Full-stack deployment (Vercel + Render + MongoDB Atlas)

## 🛠️ Tech Stack

| Layer        | Tech                     |
|--------------|--------------------------|
| Frontend     | React + Vite + Axios     |
| Backend      | Node.js + Express        |
| AI Engine    | Ollama (`deepseek-coder`) |
| Database     | MongoDB Atlas + Mongoose |
| Auth         | JWT                      |
| Deployment   | Vercel (Frontend) + Render (Backend) |

## 📁 Project Structure

```

ai-qa-platform/
├── client/         # React frontend
│   └── src/
│       ├── components/
│       │   └── LoginRegister.js
│       └── App.js
├── server/         # Express backend
│   ├── models/
│   │   ├── User.js
│   │   └── Question.js
│   └── index.js

````

## 🧑‍💻 Local Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/ai-qa-platform.git
cd ai-qa-platform
````

2. **Setup Backend**

```bash
cd server
npm install
touch .env
```

`.env` file:

```
MONGO_URI=your_mongodb_atlas_uri
PORT=5050
```

Then run:

```bash
nodemon index.js
```

3. **Setup Frontend**

```bash
cd ../client
npm install
npm run dev
```

4. **Ollama**

Make sure Ollama is installed locally and running:

```bash
ollama run deepseek-coder:instruct
```

## 📌 Deployment Notes

* **Frontend deployed to Vercel** – connect the `client/` directory.
* **Backend deployed to Render** – deploy `server/` with a `web service`, set up environment variables.
* **MongoDB Atlas** – make sure Render IPs are whitelisted.

## 🔐 Environment Variables

| Variable    | Description                |
| ----------- | -------------------------- |
| MONGO\_URI  | MongoDB connection string  |
| JWT\_SECRET | JWT signing key (optional) |
| PORT        | Backend server port        |

---

## 📄 License

MIT License. Free for personal and commercial use.

---

## 🌟 Star This Project

If you like it, please give it a ⭐️ on GitHub!

```

---

