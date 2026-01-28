import { useState, useEffect } from 'react';
import Background from './components/Background';
import ChatContainer from './components/ChatContainer';
import Loader from './components/Loader';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader type="page" />;
  }

  return (
    <>
      <Background />
      <ChatContainer />
    </>
  );
}

export default App;
