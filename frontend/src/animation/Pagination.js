import React from 'react';
import './Pagination.css';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const Pagination = ({totalRecords,
                    postsPerPage,
                    setCurrentPage,
                    currentPage}) => {
    const page = [];
    for (let i = 1; i <= Math.ceil(totalRecords / postsPerPage); i++) {
        page.push(i);
    }
    const navGate = useNavigate();
    const routeChange = () =>{
        let path = `/page=${currentPage}`;
        navGate(path);
    }
    return (
        <div className='pagination'>
            {page.map((page, index) => {
                return (
                    <Button
                        color="secondary"
                        variant="contained"
                        key={index}
                        onClick={routeChange}
                        >
                        {page}
                    </Button>
                );
            })}
        </div>
    );
};

export default Pagination;