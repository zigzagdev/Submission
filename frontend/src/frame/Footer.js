import React from 'react';

const inner = {
    display: "inline-block",
    verticalAlign: "top",
    margin: "0 20px",
}

const leftInner = {
    display: "inline-block",
    verticalAlign: "top",
    margin: "0 70px 0 20px",
}

const outline = {
    display: 'flex',
    height: 100,
    backgroundColor: 'snow',
    minWidth: '1024px',
}

const headerSame = {
    display: "flex",
    margin: "0 40px 0 auto",
};

const right1 = {
    color: "darkblue",
    fontSize: "24px",
    textDecoration: "none",
}

const Footer = () => {
    return (
        <div style={outline}>
            <div style={headerSame}>
                <div style={inner}>
                    <p style={right1}>Top</p>
                </div>
                <div style={inner}>
                    <p style={right1}>Search</p>
                </div>
                <div style={leftInner}>
                    <p style={right1}>SNS</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;









