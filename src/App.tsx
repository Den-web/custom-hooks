import React from 'react';
import { UseState } from './components/useState';
import { UseEffect } from './components/useEffect';
import { UseReducer } from './components/useReducer';
import { UseInput } from './components/UseInput';
import { UseDebounce } from './components/UseDebounce';
import { Form } from './containers/UseForm';
import { UseToggle } from './containers/UseToggle';
import { UseContext } from './containers/UseContext';
import { UseLocalStorage } from './containers/UseLocalStorage';
import { UseClippy } from './containers/UseClippy';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState />
      <UseEffect />
      <UseReducer />
      <UseInput />
      <UseDebounce />
      <Form />
      <UseToggle />
      <UseContext />
      <UseLocalStorage />
      <UseClippy />
    </div>
  );
}

export default App;
