# 🤖 Premium AI Chat

A world-class, flagship AI chatbot web application featuring cutting-edge glassmorphic design, buttery-smooth animations, and premium UX that rivals Apple Vision Pro, Linear, and Arc Browser.

![Premium AI Chat](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18+-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

## ✨ Features

- **🎨 Premium Glassmorphic Design**: Stunning frosted glass effects with subtle animations
- **🌊 Animated Mesh Gradient Background**: Slow-moving colored orbs create a living, breathing interface
- **⚡ Buttery-Smooth Animations**: Framer Motion powers every interaction
- **💬 Real-time AI Chat**: Powered by OpenRouter API (GPT-3.5 Turbo)
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile
- **♿ Accessible**: Keyboard navigation and semantic HTML
- **🎯 Clean Architecture**: Modular components and custom hooks

## 🛠️ Tech Stack

### Frontend
- **React 18+** - Modern functional components with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Custom design system with glassmorphism utilities
- **Framer Motion** - Smooth, professional animations
- **Lucide React** - Beautiful, consistent icons
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Minimal, fast web framework
- **OpenRouter API** - AI chat completions
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- OpenRouter API key ([Get one here](https://openrouter.ai/))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Chat-Bot
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your OpenRouter API key:
   ```
   OPENROUTER_API_KEY=your_api_key_here
   PORT=5000
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

You'll need two terminal windows:

**Terminal 1 - Backend Server:**
```bash
cd server
npm start
```
Server will run on `http://localhost:5000`

**Terminal 2 - Frontend Dev Server:**
```bash
cd client
npm run dev
```
Frontend will run on `http://localhost:5173`

Open your browser and navigate to `http://localhost:5173` to see the app!

## 📁 Project Structure

```
Chat-Bot/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Background.jsx
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── InputBox.jsx
│   │   │   └── Loader.jsx
│   │   ├── hooks/         # Custom React hooks
│   │   │   └── useChat.js
│   │   ├── utils/         # Utility functions
│   │   │   └── api.js
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── tailwind.config.js # Tailwind configuration
│   └── package.json
├── server/                # Express backend
│   ├── routes/
│   │   └── chat.js       # Chat API endpoint
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── server.js         # Express server
│   └── package.json
├── .env.example          # Environment variables template
├── .gitignore
└── README.md
```

## 🎨 Design System

### Color Palette
- **Background**: Deep space blacks (#0a0a0f, #12121a, #1a1a24)
- **Glass Effects**: Subtle white overlays with backdrop blur
- **Accents**: Indigo (#6366f1), Violet (#8b5cf6)
- **Text**: Soft whites and grays for readability

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- **Sizes**: 12px - 16px for optimal readability

### Spacing
- **Base Unit**: 8px
- **Scale**: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (48px), 3xl (64px)

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENROUTER_API_KEY` | Your OpenRouter API key | Required |
| `PORT` | Backend server port | 5000 |

### API Configuration

The app uses OpenRouter's API with the following settings:
- **Model**: `openai/gpt-3.5-turbo`
- **Timeout**: 30 seconds
- **Endpoint**: `https://openrouter.ai/api/v1/chat/completions`

To change the AI model, edit `server/routes/chat.js` and update the `model` field.

## 🧪 Testing

### Manual Testing Checklist
- [ ] Send a message and receive AI response
- [ ] Test Enter key to send message
- [ ] Test Shift+Enter for new line
- [ ] Verify auto-scroll on new messages
- [ ] Test loading states (page load + typing indicator)
- [ ] Test on mobile devices
- [ ] Test error handling (disconnect server)
- [ ] Verify glassmorphic effects render correctly
- [ ] Check animations are smooth (60fps)

## 🚢 Deployment

### Frontend (Vercel/Netlify)
1. Build the production bundle:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the `dist` folder to your hosting provider

### Backend (Render/Railway)
1. Set environment variables in your hosting dashboard
2. Deploy the `server` directory
3. Update frontend API URL in `client/src/utils/api.js`

## 📝 License

MIT License - feel free to use this project for your portfolio!

