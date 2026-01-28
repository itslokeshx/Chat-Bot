import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';

const MessageBubble = ({ message, type, timestamp }) => {
    const isUser = type === 'user';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className={`flex gap-2 sm:gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} max-w-[90%] sm:max-w-[85%] ${isUser ? 'ml-auto' : 'mr-auto'
                }`}
        >
            {/* Avatar - smaller on mobile */}
            <div
                className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${isUser
                    ? 'bg-gradient-to-br from-accent-indigo to-accent-violet shadow-md shadow-accent-indigo/20'
                    : 'glass-medium border border-glass-border/50'
                    }`}
            >
                {isUser ? (
                    <User size={14} className="text-white sm:w-4 sm:h-4" />
                ) : (
                    <Bot size={14} className="text-accent-indigo sm:w-4 sm:h-4" />
                )}
            </div>

            <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} flex-1`}>
                {/* Message bubble */}
                <div
                    className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-200 ${isUser
                        ? 'bg-gradient-to-br from-accent-indigo/20 to-accent-violet/20 border border-accent-indigo/30 rounded-br-md'
                        : 'glass-medium border border-glass-border/50 rounded-bl-md'
                        }`}
                >
                    <p
                        className={`text-sm sm:text-[15px] leading-relaxed ${isUser ? 'font-medium' : 'font-normal'
                            } text-text-primary`}
                    >
                        {message}
                    </p>
                </div>

                {/* Timestamp */}
                {timestamp && (
                    <span className="text-[10px] sm:text-[11px] text-text-tertiary mt-1 sm:mt-1.5 px-1">
                        {timestamp}
                    </span>
                )}
            </div>
        </motion.div>
    );
};

export default MessageBubble;
