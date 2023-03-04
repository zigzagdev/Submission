import React, {useEffect, useState} from 'react';
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

const paginationLine = {
    marginTop: "8%",

}

const Top = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:3003`);
                setData(res.data);
                setTotalPage(Math.ceil(res.data.length / postsPerPage));
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser()
    }, []);
    const lastRecord = currentPage * postsPerPage;
    const firstRecord = lastRecord - postsPerPage;
    const currentRecords = data.slice(firstRecord, lastRecord);

    return (
        <div style={main}>
            <div style={opinion}>
                    <strong style={{fontSize: "20px", display:"inline-block", marginTop: "3%"}}>
                        {currentPage}/{totalPage}Page
                    </strong>
                    <Pagination
                        totalRecords={data.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        currentRecords={currentRecords}
                        style={{display: "flex"}}
                    />
                <div style={totalOpinion}>
                    {currentRecords.map((eachUser, i) => (
                        <div style={eachOpinion}>
                            <a href={`/${eachUser.id}`}>
                                <Card style={eachCard}>
                                    <span style={fontStyle}>
                                        {eachUser.name}
                                    </span>
                                </Card>
                            </a>
                        </div>
                    ))}
                </div>
                <div style={paginationLine}>
                    {currentPage}/{totalPage}
                    <Pagination
                        totalRecords={data.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        currentRecords={currentRecords}
                    />
                </div>
            </div>
        </div>
    );
};

export default Top;