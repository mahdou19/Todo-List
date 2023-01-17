import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
  

function Toaster({severity, message}) {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
      setOpen(false);
    }
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
       <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
     )
}

export default Toaster