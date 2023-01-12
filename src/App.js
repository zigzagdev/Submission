import './App.css';
import React  from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Top from  './main/Top';
import Form from  './main/Form';
import Header from './frame/Header';
import Footer from './frame/Footer';









function App() {
  return (
      <div className="Wrapper">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Top/>}/>
            <Route path="/Form" element={<Form/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
  );
}

export default App;