import React from "react";
import {Button} from "@mui/material";

const outline = {
    display:'flex',
    height: 100,
    backgroundColor: 'snow',
    minWidth:'1024px',
}

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
    color: "gray",
}

const Header = () => {
    return (
        <div style={outline}>
            <div style={sameLine}>
                <div style={title}>
                    <a href="/Form" style={{textDecoration: "none"}}>
                        <strong style={font}>ReactForm</strong>
                    </a>
                </div>
            </div>
            <div style={headerSame}>
                <div style={right2}>
                    <Button variant="contained" href="/" color="success">Top</Button>
                </div>
                <div style={right2}>
                    <Button variant="contained" href="/Form" color="info">Form</Button>
                </div>
                <div style={right2}>
                    <Button variant="contained" href="/Question" color="secondary">QuestionIndex</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;







































































































