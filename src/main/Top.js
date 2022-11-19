import React from "react";

const frame =  {
    margin: "40px 30px",

}

const topName = {
    textAlign: "center",

}

const mainOpinions = {
    display: "flex",
    margin: "10px 20px",
}
const eachOpinion = {

}

function Top() {

    return(
        <div style={frame}>
            <div style={topName}>
                Top Page here select you what you want .
            </div>
            <div className="">
                These are opinions from everyone. Check it whether you want to ask is here or not .
            </div>
            <div style={mainOpinions}>
                <div style={eachOpinion}>
                    write down here mysqlConnection.
                </div>
            </div>
        </div>
    )
}

export default Top;
