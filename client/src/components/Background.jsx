import FloatingLines from './FloatingLines';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base dark background */}
            <div className="absolute inset-0 bg-gradient-to-br from-space-black via-charcoal to-space-black" />

            {/* FloatingLines shader background */}
            <div className="absolute inset-0">
                <FloatingLines
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={5}
                    lineDistance={5}
                    bendRadius={5}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                    animationSpeed={1}
                    mixBlendMode="screen"
                />
            </div>

            {/* Radial vignette overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-space-black opacity-40" />
        </div>
    );
};

export default Background;

