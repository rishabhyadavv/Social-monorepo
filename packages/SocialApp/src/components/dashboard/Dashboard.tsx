// src/App.tsx
import React, { useState } from 'react';
import CircularSelection from '@components/common/CircularSelection';
import '@styles/Dashboard.css';

import { Choices } from '@enums/Choices';

const Dashboard: React.FC = () => {
  const [gameMessage, setGameMessage] = useState<string>('');

  const generateGame = (choice: Choices) => {
    const messages: { [key in Choices]: string } = {
      [Choices.HAPPY]: 'You are feeling happy and joyful!',
      [Choices.SAD]: 'You are feeling sad and gloomy.',
      [Choices.EXCITED]: 'You are feeling excited and energetic!',
      [Choices.OVER_EXCITED]: 'You are overly excited, calm down a bit!'
    };
    setGameMessage(messages[choice]);
  };

  return (
    <div className="App">
      <h1>Fun Game</h1>
      <CircularSelection onSelection={generateGame} />
      {gameMessage && <div className="game-message">{gameMessage}</div>}
    </div>
  );
};

export default Dashboard;
