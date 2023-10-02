import React, { useEffect, useState } from 'react';
import CustomizedSnackbars from '../CustomizedSnackbars';
import { useOnlineStatus } from './OnlineStatusContext';

function InternetConnectionChecker() {
  const { handleOnlineChange } = useOnlineStatus();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Handle online event
    const handleOnline = () => {
      setIsOnline(true);
      handleOnlineChange(true);
      console.log("And we're back Online :).");
    };

    // Handle offline event
    const handleOffline = () => {
      setIsOnline(false);
      handleOnlineChange(false);
      console.log('Connection is down.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [handleOnlineChange]);

  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') {
      // You can add more logic here if needed
    }
  };

  return (
    <CustomizedSnackbars
      open={!isOnline}
      severity={isOnline ? 'success' : 'error'}
      message={isOnline ? 'You are Online' : 'Check your internet connection :('}
      onClose={handleClose}
    />
  );
}

export default InternetConnectionChecker;
