import react, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {Button, Card} from "@mui/material";
import React from "react";
import "../animation/Pagination.css";
import Pagination from "../animation/Pagination";

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

function Page(
    totalRecords,
) {
    const [array, setArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const firstPage = 1;
    const nav = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3003`);
                setArray(res.data);
                setTotalPage(Math.ceil(res.data.length/postsPerPage));
            } catch (err) {
                console.log(err);
            }
        };
        fetchData()
    }, []);

    let page = [];
    for (let i = 1; i <= Math.ceil(array.data / postsPerPage); i++) {
        page.push(i);
    }
    const lastRecord = currentPage * postsPerPage;
    const firstRecord = lastRecord - postsPerPage;
    const currentRecords = array.slice(firstRecord, lastRecord);

    function decrement() {
        setCurrentPage(currentPage - 1);
    }
    function increment() {
        setCurrentPage(currentPage + 1);
    }
    return (
        <div style={main}>
            <div style={opinion}>
                {currentPage}/{totalPage}
                <Pagination
                    totalRecords={array.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    currentRecords={currentRecords}
                />
                <div style={totalOpinion}>
                    {currentRecords.map((eachUser, i) => (
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
                {currentPage}/{totalPage}
                <Pagination
                    totalRecords={array.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    currentRecords={currentRecords}
                />
            </div>
        </div>
    );
};

export default Page;