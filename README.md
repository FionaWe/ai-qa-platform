<<<<<<< HEAD
# 🧠 AI Q&A Platform

An intelligent Q&A web application that allows users to register, log in, and interact with a local LLM (Ollama) for question answering. Query history is stored securely and can be managed by users.

## 🚀 Live Demo

- **Frontend (Vercel):** ai-qa-platform-eight.vercel.app

- **Backend (Render):** (https://ai-qa-platform.onrender.com)

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

1. **Clone the repository**

### bash
git clone https://github.com/your-username/ai-qa-platform.git
cd ai-qa-platform
2. **Setup Backend
cd server
npm install
### Create .env file in server/:
MONGO_URI=your_mongodb_atlas_uri
PORT=5050
3. **Start backend server:
node index.js
4.**Setup Frontend
cd ../client
npm install
npm run dev
5.**Start Ollama locally
ollama run deepseek-coder:instruct
🔐 Environment Variables
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
⭐ Star This Project
If you find this project helpful, feel free to star it on GitHub!



=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 4615109 (Initialize project using Create React App)
