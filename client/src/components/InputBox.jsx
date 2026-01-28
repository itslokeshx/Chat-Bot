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
            <div className="relative glass-heavy rounded-2xl shadow-glass px-5 py-4 transition-all duration-300 hover:shadow-glow hover:bg-glass-medium">
                <div className="flex items-center gap-4">
                    {/* Textarea */}
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Message CyberBot..."
                        disabled={disabled}
                        rows={1}
                        className="flex-1 bg-transparent text-[15px] text-text-primary placeholder:text-text-tertiary/60 resize-none leading-6 font-normal"
                        style={{
                            maxHeight: '120px',
                            minHeight: '28px',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none'
                        }}
                    />

                    {/* Send button */}
                    <button
                        type="submit"
                        disabled={disabled || !message.trim()}
                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-violet hover:from-accent-indigo/90 hover:to-accent-violet/90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:from-accent-indigo/30 disabled:to-accent-violet/30 transition-all duration-200 flex items-center justify-center group shadow-lg shadow-accent-indigo/20"
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
