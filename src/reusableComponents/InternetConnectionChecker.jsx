// This component will check internet status of users
// Returns a snackBar informing users the status of their connection
import React, { useEffect, useState } from 'react';
import CustomizedSnackbars from './CustomizedSnackbars';

function InternetConnectionChecker() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            console.log('And we\'re back :).');
        };

        const handleOffline = () => {
            setIsOnline(false);
            console.log('Connection is down.');
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
      };

    return (
        <CustomizedSnackbars
            open={!isOnline} // Snackbar should be open when offline
            severity={isOnline ? 'success' : 'error'}
            message={isOnline ? 'You are Online' : 'Check your internet connection :('}
            onClose={()=>handleClose}
        />
    );
}

export default InternetConnectionChecker;