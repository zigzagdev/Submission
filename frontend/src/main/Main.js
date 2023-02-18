import React, { useState, useEffect } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Top from '../components/Top';
import Form from '../components/Form';
import Each from '../components/Each';


const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Top/>}/>
                    <Route path='/Form' element={<Form/>}/>
                    <Route path='/:id' element={<Each/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default Main;
