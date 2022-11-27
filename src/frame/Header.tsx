import * as React from 'react';
import {Button} from "@mui/material";

const outLine: { [key: string]: string } = {
    display: "flex",
    margin: "60px 0 31px 30px",
};

const eachBox: { [key: string]: string } = {
    display: "inline-block",
    marginLeft: "50px",
    fontSize: "30px",
};
const aa: { [key: string]: string } = {
    width:"250px",
};

const right: { [key: string]: string } = {
    display: "block",
    marginLeft: '800px'
};
const right2: { [key: string]: string } = {
    display: "block",
    marginLeft: '10px'
};

const formButton: { [key: string]: string } = {

};


const Header = () => {
    return(
        <div style={outLine}>
            <div style={eachBox}>
                SubmissionForm
            </div>
            <div style={right}>
                <Button variant="contained" href="../" color="success">TopPage</Button>
            </div>
            <div style={right2}>
                <Button variant="contained" href="../Form" color="secondary">FormPage</Button>
            </div>
        </div>
    )
}
export default Header;
