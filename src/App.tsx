import React from 'react';
import logo from './logo.svg';
import { UseState } from './components/useState';
import { UseEffect } from './components/useEffect';
import { UseReducer } from './components/useReducer';
import { UseInput } from './components/UseInput';
import { UseDebounce } from './components/UseDebounce';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <UseState />
      <UseEffect />
      <UseReducer />
      <UseInput />
      <UseDebounce />
    </div>
  );
}

export default App;
