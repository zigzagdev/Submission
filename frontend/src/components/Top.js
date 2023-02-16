import React, {useEffect, useState} from 'react';
import {Card} from "@mui/material";
import axios from "axios";

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
    display: "inline-block",
    padding: "10%"
}

const fontStyle = {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline-block",
}

const Top = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("http://localhost:3003");
                setUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, []);
    console.log(user);
    return (
        <div style={main}>
            <div style={opinion}>
                <div style={totalOpinion}>
                    <div style={eachOpinion}>
                        <Card style={eachCard}>
                            <span style={{color: "black"}}>
                                jjjjjjjjiii
                            </span>
                        </Card>
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
                        <Card>
                            {/*{user.map((eachUser) => (*/}
                            {/*    <div>{eachUser.id}</div>*/}
                            {/*))}*/}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;


