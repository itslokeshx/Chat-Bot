import express from 'express';
import axios from 'axios';

const router = express.Router();

// OpenRouter API configuration
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

router.post('/', async (req, res, next) => {
    try {
        const { message, history = [] } = req.body;

        // Validate input
        if (!message || typeof message !== 'string' || message.trim() === '') {
            return res.status(400).json({
                success: false,
                reply: null,
                error: 'Message is required and must be a non-empty string'
            });
        }

        // Get API key at runtime (not at module load time)
        const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

        // Check API key
        if (!OPENROUTER_API_KEY) {
            console.error('❌ API Key not found in process.env');
            return res.status(500).json({
                success: false,
                reply: null,
                error: 'OpenRouter API key not configured'
            });
        }

        // Build messages array from history
        const messages = [
            ...history.map(msg => ({
                role: msg.role,
                content: msg.content
            })),
            {
                role: 'user',
                content: message
            }
        ];

        // Call OpenRouter API
        const response = await axios.post(
            OPENROUTER_API_URL,
            {
                model: 'google/gemini-2.0-flash-001',
                messages: messages
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'http://localhost:5173',
                    'X-Title': 'CyberBot'
                },
                timeout: 30000 // 30 second timeout
            }
        );

        // Extract AI reply
        const aiReply = response.data.choices[0]?.message?.content;

        if (!aiReply) {
            throw new Error('No response from AI');
        }

        // Send success response
        res.json({
            success: true,
            reply: aiReply,
            error: null
        });

    } catch (error) {
        console.error('Chat API Error:', error.message);

        // Handle specific error types
        if (error.response) {
            // OpenRouter API error
            const status = error.response.status;
            const message = error.response.data?.error?.message || 'AI service error';

            return res.status(status).json({
                success: false,
                reply: null,
                error: message
            });
        } else if (error.code === 'ECONNABORTED') {
            // Timeout error
            return res.status(504).json({
                success: false,
                reply: null,
                error: 'Request timeout - AI is taking too long to respond'
            });
        } else {
            // Other errors
            next(error);
        }
    }
});

export default router;
