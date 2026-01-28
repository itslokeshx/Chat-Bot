import { useState, useRef, useEffect } from 'react';
import { sendMessage } from '../utils/api';

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    };

    // Scroll when messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Format timestamp
    const getTimestamp = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    // Send message handler
    const handleSendMessage = async (messageText) => {
        if (!messageText.trim()) return;

        const timestamp = getTimestamp();

        // Add user message immediately
        const userMessage = {
            id: Date.now(),
            type: 'user',
            message: messageText,
            timestamp,
        };

        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        setError(null);

        try {
            // Build conversation history for context
            const history = messages.map(msg => ({
                role: msg.type === 'user' ? 'user' : 'assistant',
                content: msg.message,
            }));

            // Call API
            const response = await sendMessage(messageText, history);

            if (response.success) {
                // Add AI response
                const aiMessage = {
                    id: Date.now() + 1,
                    type: 'ai',
                    message: response.reply,
                    timestamp: getTimestamp(),
                };

                setMessages(prev => [...prev, aiMessage]);
            } else {
                throw new Error(response.error || 'Failed to get response');
            }
        } catch (err) {
            console.error('Chat error:', err);
            setError(err.message);

            // Add error message to chat
            const errorMessage = {
                id: Date.now() + 1,
                type: 'ai',
                message: `Sorry, I encountered an error: ${err.message}`,
                timestamp: getTimestamp(),
            };

            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        messages,
        isLoading,
        error,
        handleSendMessage,
        messagesEndRef,
    };
};

export default useChat;
