import { useState, useEffect } from 'react';
import Background from './components/Background';
import ChatContainer from './components/ChatContainer';
import LandingPage from './components/LandingPage';
import Loader from './components/Loader';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [chatStarted, setChatStarted] = useState(false);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setChatStarted(true);
  };

  if (isLoading) {
    return (
      <>
        <Background />
        <Loader type="page" />
      </>
    );
  }

  return (
    <>
      <Background />
      {!chatStarted ? (
        <LandingPage onStart={handleStart} />
      ) : (
        <ChatContainer />
      )}
    </>
  );
}

export default App;

