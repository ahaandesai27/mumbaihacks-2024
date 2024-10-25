import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    // Load userId from local storage
    const savedUserId = localStorage.getItem('userId');
    return savedUserId ? JSON.parse(savedUserId) : null;
  });

  useEffect(() => {
    // Save userId to local storage whenever it changes
    if (userId !== null) {
      localStorage.setItem('userId', JSON.stringify(userId));
    } else {
      localStorage.removeItem('userId'); // Remove if userId is null
    }
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};
