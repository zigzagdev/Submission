import React, {Fragment, useEffect, useState} from "react";
import "./Pagination.css";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
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


const Pagination = ({
                        totalRecords,
                        postsPerPage,
                        setCurrentPage,
                        currentPage
                    }) => {
    const [data, setData] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const firstPage = 1;

    let page = [];
    for (let i = 1; i <= Math.ceil(totalRecords / postsPerPage); i++) {
        page.push(i);
    }

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
    const nav = useNavigate();

    function decrement() {
        setCurrentPage(currentPage - 1);
    }
    function increment() {
        setCurrentPage(currentPage + 1);
    }

    return (
        <div className='pagination'>
            <Button
                disabled={currentPage ===  firstPage? true : false}
                onClick={decrement}
                color="primary"
            >
                PREVIOUS
            </Button>
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
            <Button
                disabled={currentPage === totalPage ? true : false}
                onClick={increment}
                color="warning"
            >
                NEXT
            </Button>
        </div>
    );
};

export default Pagination;