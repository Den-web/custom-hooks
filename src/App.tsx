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
import { UseWebworker } from './examples/UseWebworker';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>UseState</h2>
      <UseState />
      <h2>UseEffect</h2>
      <UseEffect />
      <h2>UseReducer</h2>
      <UseReducer />
      <h2>UseInput</h2>
      <UseInput />
      <h2>UseDebounce</h2>
      <UseDebounce />
      <h2>Form</h2>
      <Form />
      <h2>UseToggle</h2>
      <UseToggle />
      <h2>UseContext</h2>
      <UseContext />
      <h2>UseLocalStorage</h2>
      <UseLocalStorage />
      <h2>UseClippy</h2>
      <UseClippy />
      <h2>UseWebworker</h2>
      <UseWebworker />
    </div>
  );
}

export default App;
