import logo from './logo.svg';
import './App.css';
import React from 'react';
import GlobalProvider from './GlobalState';
import { AddList } from './AddList';
import Practice from './Practice';
import './style.css'

function App() {
  return (
    <div className="container">
   
   <GlobalProvider>
      <AddList/>
      <Practice />
       
      </GlobalProvider>
   </div>
  );
}

export default App;
