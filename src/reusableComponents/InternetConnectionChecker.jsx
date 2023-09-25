import React, { useEffect, useState } from 'react';
import CustomizedSnackbars from './CustomizedSnackbars';

function InternetConnectionChecker() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        // Define event handlers for online and offline events
        const handleOnline = () => {
            setIsOnline(true);
            console.log('And we\'re back :).');
        };

        const handleOffline = () => {
            setIsOnline(false);
            console.log('Connection is down.');
        };

        // Add event listeners for online and offline events
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Remove event listeners when the component is unmounted
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    // Function to handle Snackbar close event
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
            onClose={handleClose} // Pass the handleClose function
        />
    );
}

export default InternetConnectionChecker;
