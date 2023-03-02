import React, { useState, useEffect } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Top from '../components/Top';
import Form from '../components/Form';
import Each from '../components/Each';
import Update from '../components/Update';
import Pagination from "../animation/Pagination";
import Page from "../components/Page";


const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Top/>}/>
                    <Route path='/Form' element={<Form/>}/>
                    <Route path='/:id' element={<Each/>}/>
                    <Route path='/Update/:id' element={<Update/>}/>
                    <Route path='/' element={<Pagination/>}/>
                    <Route path='/Page/:page' element={<Page/>}/>
                    <Route path='/Page/:page/:id' element={<Each/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default Main;