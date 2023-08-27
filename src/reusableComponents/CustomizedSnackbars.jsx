import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function CustomizedSnackbars({ open, message, severity, onClose }) {

  const handleClose = (event, reason) => {

    if (reason === 'clickaway') {

      return;

    }

    onClose();

  }; 

  return (

    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>

      <MuiAlert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>

        {message}

      </MuiAlert>
      
    </Snackbar>
    
  );
}

export default CustomizedSnackbars;
