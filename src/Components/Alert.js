import React, { useContext } from 'react'
import { AlertContext } from '../contextProvider/AlertProvider'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AlertWrapper = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alert = () => {
    const { alert, hideAlert } = useContext(AlertContext);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        hideAlert();
    };

    return (
        <Snackbar open={alert.show} autoHideDuration={2000} onClose={handleClose} >
            <AlertWrapper onClose={handleClose} severity={alert.type}>
                {alert.message}
            </AlertWrapper>
        </Snackbar>
    );
}
export default Alert
