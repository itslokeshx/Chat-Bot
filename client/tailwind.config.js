/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Background layers
                'space-black': '#0a0a0f',
                'charcoal': '#12121a',
                'dark-gray': '#1a1a24',

                // Glass effects
                'glass-light': 'rgba(255, 255, 255, 0.03)',
                'glass-medium': 'rgba(255, 255, 255, 0.06)',
                'glass-heavy': 'rgba(255, 255, 255, 0.08)',
                'glass-border': 'rgba(255, 255, 255, 0.1)',

                // Accent colors
                'accent-indigo': '#6366f1',
                'accent-violet': '#8b5cf6',
                'accent-cyan': '#06b6d4',
                'accent-emerald': '#10b981',

                // Text colors
                'text-primary': '#e5e7eb',
                'text-secondary': '#9ca3af',
                'text-tertiary': '#6b7280',

                // Mesh gradient colors
                'mesh-purple': '#3b0764',
                'mesh-blue': '#0c4a6e',
                'mesh-teal': '#134e4a',
            },
            spacing: {
                'xs': '4px',
                'sm': '8px',
                'md': '16px',
                'lg': '24px',
                'xl': '32px',
                '2xl': '48px',
                '3xl': '64px',
            },
            borderRadius: {
                'input': '16px',
                'bubble': '20px',
                'container': '24px',
                'button': '12px',
            },
            backdropBlur: {
                'glass': '12px',
                'glass-heavy': '20px',
                'glass-light': '8px',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            fontSize: {
                'body': '16px',
                'input': '15px',
                'timestamp': '12px',
                'button': '14px',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 20s ease-in-out infinite',
                'float-delayed': 'float 25s ease-in-out infinite 5s',
                'float-slow': 'float 30s ease-in-out infinite 10s',
                'typing-dot': 'typingDot 1.2s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '33%': { transform: 'translate(30px, -30px)' },
                    '66%': { transform: 'translate(-20px, 20px)' },
                },
                typingDot: {
                    '0%, 60%, 100%': { transform: 'translateY(0)' },
                    '30%': { transform: 'translateY(-10px)' },
                },
            },
            boxShadow: {
                'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
                'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
                'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
            },
        },
    },
    plugins: [],
}
