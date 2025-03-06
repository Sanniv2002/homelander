import { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { PartnerLogos } from './components/PartnerLogos';
import { ChatInterface } from './components/ChatInterface';
import { SpacePrompt } from './components/SpacePrompt';

function App() {
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const [spaceButtonAnimation, setSpaceButtonAnimation] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isSpacePressed) {
        setIsSpacePressed(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsSpacePressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isSpacePressed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpaceButtonAnimation(true);
      setTimeout(() => setSpaceButtonAnimation(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Logo />
      <PartnerLogos />
      <div className="fixed bottom-0 right-0 left-0 flex flex-col md:flex-row">
        <ChatInterface isSpacePressed={isSpacePressed} />
        <SpacePrompt spaceButtonAnimation={spaceButtonAnimation} />
      </div>
    </div>
  );
}

export default App;