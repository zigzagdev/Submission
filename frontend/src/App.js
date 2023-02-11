import './App.css';
import React  from 'react';
import Main from './main/Main';
import Header from './frame/Header';
import Footer from './frame/Footer';


function App() {
  return (
      <div className="Wrapper">
        <Header/>
          <Main/>
      </div>
  );
}

export default App;