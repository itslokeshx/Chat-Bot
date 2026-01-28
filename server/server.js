// CRITICAL: Load environment variables FIRST, before any other imports
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from project root
dotenv.config({ path: join(__dirname, '../.env') });

// Now import everything else AFTER env vars are loaded
import express from 'express';
import cors from 'cors';
import chatRouter from './routes/chat.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Debug: Log API key status (first 10 chars only for security)
console.log('🔑 API Key loaded:', process.env.OPENROUTER_API_KEY ? `${process.env.OPENROUTER_API_KEY.substring(0, 10)}...` : 'NOT FOUND');
console.log('📍 Port:', PORT);

// CORS configuration - allow both local and production
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5000',
  process.env.FRONTEND_URL,
  'https://cyberbot-frontend.onrender.com'
].filter(Boolean); // Remove undefined values

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);

    // Allow all Vercel deployments (*.vercel.app)
    if (origin && origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('❌ Blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/chat', chatRouter);

// Keep-alive ping endpoint
app.get('/api/ping', (req, res) => {
  console.log('🏓 Ping received');
  res.json({
    status: 'alive',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running',
    apiKeyConfigured: !!process.env.OPENROUTER_API_KEY
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Self-ping every 14 minutes to prevent sleep (only in production)
if (process.env.NODE_ENV === 'production') {
  const PING_INTERVAL = 14 * 60 * 1000; // 14 minutes in milliseconds

  setInterval(async () => {
    try {
      const response = await fetch(`http://localhost:${PORT}/api/ping`);
      const data = await response.json();
      console.log('✅ Self-ping successful:', data.timestamp);
    } catch (error) {
      console.error('❌ Self-ping failed:', error.message);
    }
  }, PING_INTERVAL);

  console.log('⏰ Keep-alive mechanism activated (pings every 14 minutes)');
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/chat`);
});
