import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "@mui/material";

function Toast() {
    const showToastMessage = () => {
        toast.success('Your form was send successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div>
            <Button onClick={showToastMessage} variant="contained" sx={"background-color: lightblue;"}>
                <strong style={{color: "black"}}>Send</strong>
            </Button>
            <ToastContainer />
        </div>
    );
}
export default Toast;
