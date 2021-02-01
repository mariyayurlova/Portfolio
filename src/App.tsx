import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Banner } from './components/banner/banner';
import { Header } from './components/header/header';

function App() {
  return (
      <BrowserRouter>
          <div>
            <Header/>
            <Banner/>
          </div>
      </BrowserRouter>
  );
}

export default App;
