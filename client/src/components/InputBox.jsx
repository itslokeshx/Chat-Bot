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
            const newHeight = Math.min(textarea.scrollHeight, 120); // Max 5 lines (~24px per line)
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
            <div className="glass-medium rounded-input p-3 shadow-glass border border-glass-border transition-smooth focus-within:shadow-glow focus-within:scale-[1.01]">
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
                        className="flex-1 bg-transparent border-none outline-none text-input text-text-primary placeholder-text-tertiary resize-none"
                        style={{ maxHeight: '120px' }}
                    />

                    {/* Send button */}
                    <button
                        type="submit"
                        disabled={disabled || !message.trim()}
                        className="flex-shrink-0 w-10 h-10 rounded-button bg-accent-indigo/20 hover:bg-accent-indigo/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-smooth flex items-center justify-center group"
                    >
                        <Send
                            size={18}
                            className="text-accent-indigo group-hover:scale-110 transition-smooth"
                        />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default InputBox;
