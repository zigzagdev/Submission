import * as React from 'react';

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
    marginLeft: '1000px'
};
const right2: { [key: string]: string } = {
    display: "block",
    marginLeft: '30px'
};
const Header = () => {
    return(
        <div style={outLine}>
            <div style={eachBox}>
                left side
            </div>
            <div style={right}>
                right side
            </div>
            <div style={right2}>
                right side2
            </div>
        </div>
    )
}
export default Header;
