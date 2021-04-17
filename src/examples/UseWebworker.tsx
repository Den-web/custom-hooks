import React, { useState } from 'react';

import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import { useFibonacci } from "../utils/hooks/useFibonacci";

interface HandleNameChangeInterface {
  target: HTMLInputElement;
}

export function UseWebworker() {
  const [value, setValue] = useState('');
  // const { result, error, run } = useWebworker((k) => k + 1)
  const { result, error, run } = useFibonacci();

  const handleValueChange = (event: HandleNameChangeInterface ) => {
    setValue(event.target.value)
  };

  const getNthFibonacciNumber = () => {
    run(value)
  };

  return (
    <div className="main-container">
    <div className="controls-container">
    <FormControl
      placeholder="Value"
      aria-label="Value"
      //@ts-ignore
      onChange={handleValueChange}
  />
  <Button variant="primary" onClick={getNthFibonacciNumber}>
    Run
    </Button>
    </div>
  {error ? (
    <p className="error-message">{error}</p>
  ) : (
    <p className="result">{result}</p>
  )}
  </div>
)
}
