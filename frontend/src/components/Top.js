import React from 'react';
import {Card} from "@mui/material";

const main = {
    flexDirection: "column",
    height: "100%",
    margin: 0,
    padding: 0
}

const opinion = {
    margin: "4% 12%",
    flexWrap: "wrap",
}

const totalOpinion = {
    display: "flex",
    margin: "2% 3%",
    flexWrap: "wrap",
    justifyContent: "spaceEvenly",
}

const eachOpinion = {
    margin: "4% 4%",
}

const eachCard = {
    backgroundColor: "snow",
    width: "250px",
    height: "170px",
    borderRadius: "20px",
    overflowWrap: "hidden",
    textOverflow: "ellipsis",
    whitespace: "no-wrap",
    display: "inline-block",
    padding: "10%"
}

const fontStyle = {
    width: "100%",
    whitespace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline-block",
}

const Top = () => {
    return (
        <div style={main}>
            <div style={opinion}>
                <div style={totalOpinion}>
                    <div style={eachOpinion}>
                        <Card style={eachCard}><strong style={{color: "black"}}></strong></Card>
                    </div>
                    <div style={eachOpinion}>
                        <Card style={eachCard}>aa</Card>
                    </div>
                    <div style={eachOpinion}>
                        <Card style={eachCard}>aa</Card>
                    </div>
                    <div style={eachOpinion}>
                        <Card style={eachCard}>aa</Card>
                    </div>
                    <div style={eachOpinion}>
                        <Card style={eachCard}>aa</Card>
                    </div>
                    <div style={eachOpinion}>
                        <Card style={eachCard}>aa</Card>
                    </div>
                    <div style={eachOpinion}>
                        <Card style={eachCard}>aa</Card>
                    </div>
                    <div style={eachOpinion}>
                        <Card style={eachCard}>aa</Card>
                    </div>
                    <div style={eachOpinion}>
                        <Card style={eachCard}>aa</Card>
                    </div>
                    <div style={eachOpinion}>
                        <Card style={eachCard}>
                            <span style={fontStyle}>
                                dgsdgadfsdfsdffsg<br/>sbbbbbfdasdasfsdfsdafsdfdsfdsfsdfdsfdsfsdydydyydyydyyyydyydyysdfsadfsadyf<br/>dysfdyfyasfsdfsdfdsfsafsdfsafsdfasdfsadfdsafsadyfsyafysadfysdfsdfysyyfdsfyfsadfadsfasfsafsdfdsfsadfsadfasdfa
                                <br/>dsfasdfdsfarrrrrrrayadgkkkkkkkknnnnn
                                <br/>dsfasdfdsfarrrrrrrayadgkkkkkkkknnnnn
                                <br/>dsfasdfdsfarrrrrrrayadgkkkkkkkknnnnn
                                <br/>dsfasdfdsfarrrrrrrayadgkkkkkkkknnnnn
                                <br/>dsfasdfdsfarrrrrrrayadgkkkkkkkknnnnn
                            </span>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;





















