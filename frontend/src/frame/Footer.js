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
    display: "grid",
}

const right1 = {
    color: "darkblue",
    fontSize: "24px",
    textDecoration: "none",
}

const Footer = () => {
    return (
        <div style={outline}>
            <div style={{margin: "20px 60px 23px auto"}}>
                <div style={inner}>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong style={right1}>Search</strong>
                    </a>
                </div>
                <div style={inner}>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong style={right1}>Top</strong>
                    </a>
                </div>
                <div style={leftInner}>
                    <a href="/" style={{textDecoration: "none"}}>
                        <strong style={right1}>SNS</strong>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;