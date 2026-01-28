import MessageBubble from './MessageBubble';
import InputBox from './InputBox';
import Loader from './Loader';
import useChat from '../hooks/useChat';

const ChatContainer = () => {
    const { messages, isLoading, handleSendMessage, messagesEndRef } = useChat();

    return (
        <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 md:p-6">
            {/* Main chat container - centered with max width */}
            <div className="w-full max-w-[900px] h-full flex flex-col relative">
                {/* Glass container with messages */}
                <div className="flex-1 glass rounded-container shadow-glass flex flex-col overflow-hidden relative">
                    {/* Messages area - with bottom padding for input */}
                    <div className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 space-y-3 sm:space-y-4 pb-[100px] sm:pb-[110px]">
                        {messages.length === 0 ? (
                            // Welcome message
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center space-y-3 sm:space-y-4 px-4">
                                    <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
                                        Welcome to CyberBot
                                    </h2>
                                    <p className="text-sm sm:text-base text-text-secondary">
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
                                    <div className="flex items-start mr-auto max-w-[70%] sm:max-w-[70%]">
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

                    {/* Input area - absolutely positioned at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 border-t border-glass-border px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-space-black/80 backdrop-blur-xl">
                        <InputBox onSend={handleSendMessage} disabled={isLoading} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatContainer;
