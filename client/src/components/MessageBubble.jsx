import { motion } from 'framer-motion';

const MessageBubble = ({ message, type, timestamp }) => {
    const isUser = type === 'user';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[70%] ${isUser ? 'ml-auto' : 'mr-auto'
                }`}
        >
            {/* Message bubble */}
            <div
                className={`px-5 py-4 rounded-bubble transition-smooth ${isUser
                        ? 'glass-accent rounded-br-[4px]'
                        : 'glass-light rounded-bl-[4px]'
                    }`}
            >
                <p className={`text-body leading-relaxed ${isUser ? 'font-medium' : 'font-normal'
                    } text-text-primary`}>
                    {message}
                </p>
            </div>

            {/* Timestamp */}
            {timestamp && (
                <span className="text-timestamp text-text-tertiary mt-1 px-2">
                    {timestamp}
                </span>
            )}
        </motion.div>
    );
};

export default MessageBubble;
