import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

const InputBox = ({ onSend, disabled }) => {
    const [message, setMessage] = useState('');
    const textareaRef = useRef(null);

    // Auto-resize textarea
    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            const newHeight = Math.min(textarea.scrollHeight, 120);
            textarea.style.height = `${newHeight}px`;
        }
    }, [message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() && !disabled) {
            onSend(message.trim());
            setMessage('');
            // Blur input on mobile after sending to hide keyboard
            if (textareaRef.current && window.innerWidth < 768) {
                textareaRef.current.blur();
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="relative glass-medium rounded-xl sm:rounded-2xl shadow-glass px-3 sm:px-4 py-2 sm:py-2.5 border border-glass-border transition-all duration-300 hover:bg-glass-heavy hover:border-accent-indigo/30">
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Textarea */}
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Message CyberBot..."
                        disabled={disabled}
                        rows={1}
                        className="flex-1 bg-transparent text-text-primary placeholder:text-text-secondary resize-none leading-5 font-normal py-1"
                        style={{
                            fontSize: '16px', // Prevent iOS zoom
                            maxHeight: '120px',
                            minHeight: '20px',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            touchAction: 'manipulation', // Prevent double-tap zoom
                        }}
                    />

                    {/* Send button - larger touch target on mobile */}
                    <button
                        type="submit"
                        disabled={disabled || !message.trim()}
                        className="flex-shrink-0 w-10 h-10 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-violet hover:from-accent-indigo/90 hover:to-accent-violet/90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:from-accent-indigo/30 disabled:to-accent-violet/30 transition-all duration-200 flex items-center justify-center group shadow-md shadow-accent-indigo/10"
                        style={{ touchAction: 'manipulation' }}
                    >
                        <Send
                            size={18}
                            className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                        />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default InputBox;
