import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Card} from "@mui/material";
import Pagination from '../animation/Pagination';
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
    const [coinsData, setCoinsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:3003`);
                setCoinsData(res.data);
                setTotalPage(Math.ceil(res.data.length/postsPerPage));
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser()
    }, []);
    return (
        <div style={main}>
            <div style={opinion}>
                {currentPage}/{totalPage}
                <Pagination
                    totalRecords={coinsData.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
                <div style={totalOpinion}>
                    {coinsData.map((eachUser, i) => (
                        <div style={eachOpinion}>
                            <Link to={`${eachUser.id}`}>
                                <Card style={eachCard}>
                                    <span style={fontStyle}>
                                        {eachUser.name}
                                    </span>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Pagination
                    totalRecords={coinsData.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

export default Top;