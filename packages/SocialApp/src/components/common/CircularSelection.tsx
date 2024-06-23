// src/CircularSelection.tsx
import React, { useState } from 'react';
import '@styles/CircularSelection.css';
import { Choices } from '@enums/Choices';

interface CircularSelectionProps {
  onSelection: (choice: Choices) => void;
}

const choices: Choices[] = [Choices.HAPPY, Choices.SAD, Choices.EXCITED, Choices.OVER_EXCITED];

const CircularSelection: React.FC<CircularSelectionProps> = ({ onSelection }) => {
  const [selectedChoice, setSelectedChoice] = useState<Choices | null>(null);

  const handleSelection = (choice: Choices) => {
    setSelectedChoice(choice);
    onSelection(choice);
  };

  return (
    <div className="selection-container">
      {choices.map((choice) => (
        <div
          key={choice}
          className={`circle ${selectedChoice === choice ? 'selected' : ''}`}
          onClick={() => handleSelection(choice)}
        >
          {choice}
        </div>
      ))}
    </div>
  );
};

export default CircularSelection;
