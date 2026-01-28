import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base gradient background - optimized for all devices */}
            <div className="absolute inset-0 bg-gradient-to-br from-space-black via-charcoal to-space-black" />

            {/* Mobile Optimization: Static simplified background to prevent lag */}
            <div className="block md:hidden absolute inset-0 opacity-30">
                <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-mesh-purple blur-[80px]" />
                <div className="absolute top-[50%] right-[10%] w-[250px] h-[250px] rounded-full bg-mesh-blue blur-[60px]" />
                <div className="absolute bottom-[15%] left-[30%] w-[280px] h-[280px] rounded-full bg-mesh-teal blur-[70px]" />
            </div>

            {/* Desktop Only: Heavy animations and noise texture */}
            <div className="hidden md:block">
                {/* Animated mesh gradient orbs */}
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
                    style={{
                        background: 'radial-gradient(circle, #3b0764 0%, transparent 70%)',
                        top: '10%',
                        left: '10%',
                    }}
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -30, 20, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-25"
                    style={{
                        background: 'radial-gradient(circle, #0c4a6e 0%, transparent 70%)',
                        top: '50%',
                        right: '10%',
                    }}
                    animate={{
                        x: [0, -25, 15, 0],
                        y: [0, 25, -15, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 5,
                    }}
                />

                <motion.div
                    className="absolute w-[450px] h-[450px] rounded-full blur-[110px] opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #134e4a 0%, transparent 70%)',
                        bottom: '15%',
                        left: '30%',
                    }}
                    animate={{
                        x: [0, 20, -30, 0],
                        y: [0, -20, 30, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 10,
                    }}
                />

                {/* Subtle noise texture overlay - Desktop only */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Radial vignette */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-space-black opacity-50" />
        </div>
    );
};

export default Background;
