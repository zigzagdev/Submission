import * as React from 'react';
import {Button} from "@mui/material";

const outLine: { [key: string]: string } = {
    display: "flex",
    marginTop: "60px",
};

const eachBox: { [key: string]: string } = {
    display: "inline-block",
    marginLeft: "50px",
    fontSize: "30px",
};

const right: { [key: string]: string } = {
    display: "block",
};
const right2: { [key: string]: string } = {
    display: "block",
    margin: '0 10px'
};

const headerSame: { [key: string]: string } = {
    margin: "auto",
    display: "flex"
};


const Header = () => {
    return(
        <div style={outLine}>
            <div style={eachBox}>
                SubmissionPage
            </div>
            <div style={headerSame}>
                <div style={right}>
                    <Button variant="contained" href="../" color="success">TopPage</Button>
                </div>
                <div style={right2}>
                    <Button variant="contained" href="../Form" color="secondary">FormPage</Button>
                </div>
                <div style={right2}>
                    <Button variant="contained" href="../Question" color="secondary">QuestionIndex</Button>
                </div>
            </div>
        </div>
    )
}
export default Header;
