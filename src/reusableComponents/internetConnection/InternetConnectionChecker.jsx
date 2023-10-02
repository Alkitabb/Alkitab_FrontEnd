import React, { useEffect } from 'react';
import CustomizedSnackbars from '../CustomizedSnackbars';
import { useOnlineStatus } from './OnlineStatusContext';





function InternetConnectionChecker() {
  const { isOnline, handleOnlineChange } = useOnlineStatus(); // Use the context hook

  useEffect(() => {
    const handleOnline = () => {
      handleOnlineChange(true); // Notify the parent component of online status change
      console.log("And we're back :).");
    };

    const handleOffline = () => {
      handleOnlineChange(false); // Notify the parent component of online status change
      console.log('Connection is down.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [handleOnlineChange]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
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
