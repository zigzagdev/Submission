import './App.css';
import React  from 'react';
import Main from './main/Main';
import Header from './frame/Header';
import Footer from './frame/Footer';

const Wrapper = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto ",
    gridTemplateColumns: "100%",
    minHeight: "100vh",
}

function App() {
  return (
      <div style={Wrapper}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
  );
}

export default App;