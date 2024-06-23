// src/dashboard/Dashboard.tsx
import React from 'react';
import '@styles/Hobbies.css';

interface HobbiesProps {
  hobbies: string[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <div className="dashboard">
      <h2>Welcome to your Dashboard!</h2>
      {hobbies.length > 0 && (
        <div className="hobbies-section">
          <h3>Your Hobbies:</h3>
          <ul>
            {hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hobbies;
