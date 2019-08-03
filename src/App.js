import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './routes/header';
import Router from './routes/route';
import './App.css';

export function App (){
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Router />
      </div>
    </BrowserRouter>
  );

}

export default App;