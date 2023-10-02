import React, { createContext, useContext, useState } from 'react';

const OnlineStatusContext = createContext();

export function OnlineStatusProvider({ children }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnlineChange = (online) => {
    setIsOnline(online);
  };

  return (
    <OnlineStatusContext.Provider value={{ isOnline, handleOnlineChange }}>
      {children}
    </OnlineStatusContext.Provider>
  );
}

export function useOnlineStatus() {
  return useContext(OnlineStatusContext);
}
