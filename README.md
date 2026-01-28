# 🤖 CyberBot

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_App-blue?style=for-the-badge)](https://chat-bot-cyber.vercel.app/)

A modern, responsive AI chatbot application featuring a glassmorphic UI and real-time AI responses.

## 📂 File Structure

```mermaid
graph TD
    Client[client/] --> Components[src/components/]
    Client --> Hooks[src/hooks/]
    Client --> Utils[src/utils/]
    Server[server/] --> Routes[routes/chat.js]
    Server --> ServerFile[server.js]
```

### Directory Details
- **`client/`**: React frontend powered by Vite
  - `src/components/`: UI modules (ChatContainer, InputBox, Background)
  - `src/hooks/`: Logic reuse (useChat)
- **`server/`**: Express backend
  - `routes/`: API endpoint definitions

## ☁️ Hosting Architecture

| Component | Provider | Config | Env Vars |
|-----------|----------|--------|----------|
| **Frontend** | [Vercel](https://vercel.com) | Static Site (Vite) | `VITE_API_URL` |
| **Backend** | [Render](https://render.com) | Node.js Service | `OPENROUTER_API_KEY`, `PORT` |

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **AI Model**: GPT-3.5 Turbo (via OpenRouter)

## 🚀 Quick Start

1. **Clone & Setup**
   ```bash
   git clone <repo-url>
   cd Chat-Bot && cp .env.example .env
   ```

2. **Run Locally**
   ```bash
   # Terminal 1: Backend
   cd server && npm install && npm start

   # Terminal 2: Frontend
   cd ../client && npm install && npm run dev
   ```

## 📝 License

MIT License
