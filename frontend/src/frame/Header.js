import React from "react";
import {Button} from "@mui/material";

const outline = {
    display:'flex',
    justifyContent:'space-between',
    height: 100,
    backgroundColor: 'snow',
    minWidth:'1024px',
}

const style = {
    textAlign: "right",
    paddingRight: 100,
    lineHeight:3,
    fontSize: 30,

}

const style2 = {
    textAlign: "left",
    fontSize: 30,
    paddingLeft: 100,
    lineHeight:3,

}
const right = {
    display: "block",
};
const right2 = {
    display: "block",
    margin: '30px 10px'
};

const headerSame = {
    display: "flex",
    margin: "0 40px 0 auto",
};

const sameLine = {
    display: "flex",
    margin: '30px 10px'
}

const title = {
    margin: "0 auto 0 35px",
}

const font = {
    fontSize: "30px",
    color: "gray"
}


const Header = () => {
    return (
        <div style={outline}>
            <div style={sameLine}>
                <div style={title}>
                    <strong style={font}>ReactForm</strong>
                </div>
            </div>
            <div style={headerSame}>
                <div style={right2}>
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


