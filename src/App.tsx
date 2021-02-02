import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Banner } from './components/banner/banner';
import { Header } from './components/header/header';
import {Works} from "./components/works/works";

function App() {
  return (
      <BrowserRouter>
          <div>
            <Header/>
            <Banner/>
            <Works/>
          </div>
      </BrowserRouter>
  );
}

export default App;
