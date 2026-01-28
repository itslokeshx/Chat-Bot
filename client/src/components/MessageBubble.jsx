import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';

const MessageBubble = ({ message, type, timestamp }) => {
    const isUser = type === 'user';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} max-w-[85%] ${isUser ? 'ml-auto' : 'mr-auto'
                }`}
        >
            {/* Avatar */}
            <div
                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${isUser
                        ? 'bg-gradient-to-br from-accent-indigo to-accent-violet shadow-md shadow-accent-indigo/20'
                        : 'glass-medium border border-glass-border/50'
                    }`}
            >
                {isUser ? (
                    <User size={16} className="text-white" />
                ) : (
                    <Bot size={16} className="text-accent-indigo" />
                )}
            </div>

            <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} flex-1`}>
                {/* Message bubble */}
                <div
                    className={`px-4 py-3 rounded-2xl transition-all duration-200 ${isUser
                            ? 'bg-gradient-to-br from-accent-indigo/20 to-accent-violet/20 border border-accent-indigo/30 rounded-br-md'
                            : 'glass-medium border border-glass-border/50 rounded-bl-md'
                        }`}
                >
                    <p
                        className={`text-[15px] leading-relaxed ${isUser ? 'font-medium' : 'font-normal'
                            } text-text-primary`}
                    >
                        {message}
                    </p>
                </div>

                {/* Timestamp */}
                {timestamp && (
                    <span className="text-[11px] text-text-tertiary mt-1.5 px-1">
                        {timestamp}
                    </span>
                )}
            </div>
        </motion.div>
    );
};

export default MessageBubble;
