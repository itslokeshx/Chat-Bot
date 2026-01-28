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
            <div className="relative glass-medium rounded-2xl shadow-glass px-4 py-2.5 border border-glass-border transition-all duration-300 hover:bg-glass-heavy hover:border-accent-indigo/30">
                <div className="flex items-center gap-3">
                    {/* Textarea */}
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Message CyberBot..."
                        disabled={disabled}
                        rows={1}
                        className="flex-1 bg-transparent text-[15px] text-text-primary placeholder:text-text-secondary resize-none leading-5 font-normal py-1"
                        style={{
                            maxHeight: '120px',
                            minHeight: '20px',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none'
                        }}
                    />

                    {/* Send button */}
                    <button
                        type="submit"
                        disabled={disabled || !message.trim()}
                        className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-violet hover:from-accent-indigo/90 hover:to-accent-violet/90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:from-accent-indigo/30 disabled:to-accent-violet/30 transition-all duration-200 flex items-center justify-center group shadow-md shadow-accent-indigo/10"
                    >
                        <Send
                            size={16}
                            className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                        />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default InputBox;
