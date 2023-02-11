import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Top from '../components/Top';
import Form from '../components/Form';


const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Top/>}/>
                    <Route path='/Form' element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Main;
















