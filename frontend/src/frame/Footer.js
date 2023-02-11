import * as React from 'react';

const style = {
    marginTop: "auto",
    width: "100%",
};

const inner = {
    display:"inline-block",
    padding:  "20px 130px 20px ",
    verticalAlign: "top",
}

const right1 = {
    color: "darkblue",
    fontSize: "24px",
    textDecoration: "none",
}

const Footer = () => {
    return (
        <div style={style}>
            <div style={inner}>
                <p style={right1}>Top</p>
            </div>
            <div style={inner}>
                <p style={right1}>Search</p>
            </div>
            <div style={inner}>
                <p style={right1}>SNS</p>
            </div>
        </div>
    )
}

export default Footer;