import { motion } from 'framer-motion';

const Loader = ({ type = 'page' }) => {
    if (type === 'page') {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="flex flex-col items-center gap-12">
                    {/* App name/logo with glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight relative z-10">
                            CyberBot
                        </h1>
                        {/* Glow effect */}
                        <motion.div
                            className="absolute inset-0 blur-2xl bg-accent-indigo/30 -z-10"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    {/* Wave loader animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-2"
                    >
                        {[0, 1, 2, 3, 4].map((index) => (
                            <motion.div
                                key={index}
                                className="w-1.5 h-12 bg-gradient-to-t from-accent-indigo to-accent-violet rounded-full"
                                animate={{
                                    scaleY: [0.3, 1, 0.3],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: index * 0.15,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-text-secondary text-sm tracking-wide"
                    >
                        Initializing AI Assistant
                    </motion.p>
                </div>
            </div>
        );
    }

    // Typing indicator for message loading
    if (type === 'typing') {
        return (
            <div className="flex gap-1.5 px-5 py-4">
                {[0, 1, 2].map((index) => (
                    <motion.div
                        key={index}
                        className="w-1.5 h-1.5 rounded-full bg-text-secondary"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>
        );
    }

    return null;
};

export default Loader;
