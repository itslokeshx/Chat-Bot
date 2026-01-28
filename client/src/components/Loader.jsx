import { motion } from 'framer-motion';

const Loader = ({ type = 'page' }) => {
    if (type === 'page') {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-space-black/95 z-50">
                <div className="flex flex-col items-center gap-6">
                    {/* App name/logo */}
                    <h1 className="text-2xl font-semibold text-text-primary tracking-tight">
                        CyberBot
                    </h1>

                    {/* Three-dot typing indicator */}
                    <div className="flex gap-2">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className="w-2 h-2 rounded-full bg-accent-indigo"
                                animate={{
                                    opacity: [0.3, 1, 0.3],
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
