import React, { createContext, useContext, useState } from 'react';

const GamificationContext = createContext();

export const useGamification = () => {
  return useContext(GamificationContext);
};

export const GamificationProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([]);

  const addPoints = (amount) => {
    setPoints(points + amount);
  };

  const awardBadge = (badge) => {
    if (!badges.includes(badge)) {
      setBadges([...badges, badge]);
    }
  };

  return (
    <GamificationContext.Provider value={{ points, badges, addPoints, awardBadge }}>
      {children}
    </GamificationContext.Provider>
  );
};
