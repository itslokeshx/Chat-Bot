import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const LandingPage = ({ onStart }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 flex items-center justify-center z-50"
        >
            <div className="text-center space-y-8 px-6">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-4"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Sparkles className="w-8 h-8 text-accent-indigo" />
                        <h1 className="text-5xl md:text-6xl font-bold text-white">
                            CyberBot
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
                        Your intelligent AI assistant powered by advanced language models
                    </p>
                </motion.div>

                {/* Get Started Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onStart}
                    className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                    Get Started
                </motion.button>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-sm text-text-tertiary"
                >
                    Click to start your conversation
                </motion.p>
            </div>
        </motion.div>
    );
};

export default LandingPage;
