import React, {useEffect, useState} from "react";
import "./Pagination.css";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";

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
                disabled={currentPage === firstPage ? true : false}
                onClick={decrement}
                color="primary"
                selectedPageRel={currentPage === firstPage ? true : false}
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