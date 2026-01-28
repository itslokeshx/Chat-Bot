import MessageBubble from './MessageBubble';
import InputBox from './InputBox';
import Loader from './Loader';
import useChat from '../hooks/useChat';

const ChatContainer = () => {
    const { messages, isLoading, handleSendMessage, messagesEndRef } = useChat();

    return (
        <div className="w-full max-w-[900px] mx-auto h-screen flex flex-col p-6 md:p-lg">
            {/* Main chat container */}
            <div className="flex-1 glass rounded-container shadow-glass flex flex-col overflow-hidden">
                {/* Messages area */}
                <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4">
                    {messages.length === 0 ? (
                        // Welcome message
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl font-semibold text-text-primary">
                                    Welcome to CyberBot
                                </h2>
                                <p className="text-text-secondary">
                                    Start a conversation with the AI assistant
                                </p>
                            </div>
                        </div>
                    ) : (
                        // Messages
                        <>
                            {messages.map((msg) => (
                                <MessageBubble
                                    key={msg.id}
                                    message={msg.message}
                                    type={msg.type}
                                    timestamp={msg.timestamp}
                                />
                            ))}

                            {/* Typing indicator */}
                            {isLoading && (
                                <div className="flex items-start mr-auto max-w-[70%]">
                                    <div className="glass-light rounded-bubble rounded-bl-[4px]">
                                        <Loader type="typing" />
                                    </div>
                                </div>
                            )}

                            {/* Scroll anchor */}
                            <div ref={messagesEndRef} />
                        </>
                    )}
                </div>

                {/* Input area */}
                <div className="border-t border-glass-border px-6 py-4">
                    <InputBox onSend={handleSendMessage} disabled={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default ChatContainer;
