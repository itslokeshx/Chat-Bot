import MessageBubble from './MessageBubble';
import InputBox from './InputBox';
import Loader from './Loader';
import useChat from '../hooks/useChat';

const ChatContainer = () => {
    const { messages, isLoading, handleSendMessage, messagesEndRef } = useChat();

    return (
        // Mobile: Full screen (dvh), no padding. Desktop: Boxed, centered, padded
        <div className="w-full h-[100dvh] md:h-screen flex flex-col p-0 md:max-w-[900px] md:mx-auto md:p-6 lg:p-8">
            {/* Main chat container */}
            <div className="flex-1 flex flex-col overflow-hidden md:glass md:rounded-2xl md:shadow-glass relative">
                {/* Messages area */}
                <div className="flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-8 space-y-4 pb-[80px] md:pb-4">
                    {messages.length === 0 ? (
                        // Welcome message
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center space-y-4 px-4">
                                <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
                                    Welcome to CyberBot
                                </h2>
                                <p className="text-sm md:text-base text-text-secondary">
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
                                <div className="flex items-start mr-auto max-w-[85%] md:max-w-[70%]">
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

                {/* Input area - Fixed on Mobile, Relative on Desktop */}
                <div className="fixed bottom-0 left-0 right-0 p-3 bg-space-black/80 backdrop-blur-xl border-t border-glass-border md:static md:bg-transparent md:backdrop-blur-none md:border-t md:p-6 md:border-glass-border z-20">
                    <InputBox onSend={handleSendMessage} disabled={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default ChatContainer;
