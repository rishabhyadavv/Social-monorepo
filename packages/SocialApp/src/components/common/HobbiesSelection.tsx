// src/HobbiesSelection.tsx
import React, { useState } from 'react';
import '@styles/HobbiesSelection.css';

interface HobbiesSelectionProps {
  onSave: (hobbies: string[]) => void;
}

const hobbiesList: string[] = [
  'Reading',
  'Traveling',
  'Cooking',
  'Sports',
  'Music',
  'Movies',
  'Gardening',
  'Gaming',
];

const HobbiesSelection: React.FC<HobbiesSelectionProps> = ({ onSave }) => {
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  const toggleHobby = (hobby: string) => {
    setSelectedHobbies((prevHobbies) =>
      prevHobbies.includes(hobby)
        ? prevHobbies.filter((h) => h !== hobby)
        : [...prevHobbies, hobby]
    );
  };

  const handleSave = () => {
    onSave(selectedHobbies);
  };

  return (
    <div className="hobbies-selection">
      <h2>Select Your Hobbies</h2>
      <div className="hobbies-list">
        {hobbiesList.map((hobby) => (
          <div
            key={hobby}
            className={`hobby-item ${selectedHobbies.includes(hobby) ? 'selected' : ''}`}
            onClick={() => toggleHobby(hobby)}
          >
            {hobby}
          </div>
        ))}
      </div>
      <button onClick={handleSave} className="save-button">Save</button>
    </div>
  );
};

export default HobbiesSelection;
