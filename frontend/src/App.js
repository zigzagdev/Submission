import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Footer from  './common/Footer';
import Header from "./common/Header";
import Top from "./main/Top";
import Form from "./main/Form";


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





