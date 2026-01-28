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
            <div className="glass-medium rounded-input shadow-glass px-4 py-3 transition-all duration-200 hover:shadow-glow">
                <div className="flex items-end gap-3">
                    {/* Textarea */}
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Message AI..."
                        disabled={disabled}
                        rows={1}
                        className="flex-1 bg-transparent text-input text-text-primary placeholder:text-text-tertiary resize-none leading-6 py-0.5"
                        style={{
                            maxHeight: '120px',
                            minHeight: '24px',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none'
                        }}
                    />

                    {/* Send button */}
                    <button
                        type="submit"
                        disabled={disabled || !message.trim()}
                        className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-indigo/20 hover:bg-accent-indigo/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center group"
                    >
                        <Send
                            size={16}
                            className="text-accent-indigo group-hover:scale-110 transition-transform duration-200"
                        />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default InputBox;
