import './App.css';
import React, { Component } from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Top from  './main/Top'

function App() {
  return (
      <div className="Wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Top/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;