import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Body from './containers/Body/Body';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div >
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
