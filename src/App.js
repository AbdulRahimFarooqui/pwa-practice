import React from 'react';
import './App.css';
import Main from './Main.js';
import {TransProvider} from "./TransactionContext"

function App() {
  return (
    
      <TransProvider>
        <Main />
      </TransProvider>
  );
}

export default App;