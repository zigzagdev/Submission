import './App.css';
import React  from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Top from  './main/Top'
import Header from './frame/Header';
import Footer from './frame/Footer';


function App() {
  return (
      <div className="Wrapper">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Top/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
  );
}

export default App;