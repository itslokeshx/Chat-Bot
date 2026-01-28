import axios from 'axios';

// Use environment variable for production, fallback to Render backend
const API_BASE_URL = import.meta.env.VITE_API_URL ||
    (import.meta.env.MODE === 'development'
        ? 'http://localhost:5000/api'
        : 'https://chat-bot-6ddh.onrender.com/api');

// Create axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000, // 30 seconds
});

/**
 * Send a message to the AI chatbot
 * @param {string} message - The user's message
 * @param {Array} history - Optional conversation history
 * @returns {Promise<Object>} - Response with AI reply
 */
export const sendMessage = async (message, history = []) => {
    try {
        const response = await api.post('/chat', {
            message,
            history,
        });

        return response.data;
    } catch (error) {
        // Handle errors
        if (error.response) {
            // Server responded with error
            throw new Error(error.response.data.error || 'Failed to get AI response');
        } else if (error.code === 'ECONNABORTED') {
            // Timeout
            throw new Error('Request timeout - please try again');
        } else if (error.request) {
            // No response received
            throw new Error('Cannot connect to server - please check your connection');
        } else {
            // Other errors
            throw new Error('An unexpected error occurred');
        }
    }
};

export default api;
