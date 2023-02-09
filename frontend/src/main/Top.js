import React from "react";

const frame =  {
    margin: "50px 90px",
}

const topName = {
    textAlign: "center",

}

const mainOpinions = {
    display: "flex",
    margin: "10px 20px",
}
const eachOpinion = {
    display: "flex",
}

const selectHere = {
    marginTop:"20px",
}

const topPage = {
    marginTop:"10px",
}

function Top() {
    const mysql = require('mysql');

    const connection = mysql.createConnection({
        host : 'localhost',
        port : 'root',
        user : 'root',
        database: 'submission'
    });

    return(
        <div style={frame}>
            <div style={topPage}>
                Top Page here select you what you want .
            </div>
            <div style={selectHere}>
                These are opinions from everyone. Check it whether you want to ask is here or not .
            </div>
            <div style={mainOpinions}>
                <div style={eachOpinion}>
                </div>
            </div>
        </div>
    )
}

export default Top;
