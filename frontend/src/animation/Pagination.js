import React, {Fragment, useEffect, useState} from "react";
import "./Pagination.css";
import {Button, Card} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
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


const Pagination = ({
                        totalRecords,
                        postsPerPage,
                        setCurrentPage,
                        currentRecords,
                    }) => {
    const [data, setData] = useState([]);
    const [totalPage, setTotalPage] = useState(1);

    let page = [];
    for (let i = 1; i <= Math.ceil(totalRecords / postsPerPage); i++) {
        page.push(i);
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:3003`);
                setData(res.data);
                setTotalPage(Math.ceil(res.data.length/postsPerPage));
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser()
    }, []);
    const nav = useNavigate();

    return (
        <div className='pagination'>
            <Fragment>
                <div>
                    {page.map((page, index) => {
                        return (
                            <Button
                                key={index}
                                color="primary"
                                variant="contained"
                                onClick={() => {
                                    setCurrentPage(page)
                                    nav(`/Page/${page}`)
                                }}
                            >
                                {page}
                            </Button>
                        );
                    })}
                </div>
            </Fragment>
        </div>
    );
};

export default Pagination;