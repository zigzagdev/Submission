import React from 'react';
import './Pagination.css';
import {Button} from "@mui/material";

const Pagination = ({totalRecords,
                    postsPerPage,
                    setCurrentPage,
                    currentPage,}) => {
    let page = [];
    for (let i = 1; i <= Math.ceil(totalRecords / postsPerPage); i++) {
        page.push(i);
    }
    return (
        <div className='pagination'>
            {page.map((page, index) => {
                return (
                    <Button
                        color="secondary"
                        variant="contained"
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </Button>
                );
            })}
        </div>
    );
};

export default Pagination;