import React from 'react';
import { useForm } from '../utils/hooks/useForm';

export const Form = () => {

  const register = () => {
    console.log(values);
  };

  const [values, handleChange, handleSubmit] = useForm(register);

  return (
    <form
      onSubmit={handleSubmit}
      className=''
    >
      <label>Name:</label>
      <input
        value={values.name || ''}
        onChange={handleChange}
        name='name'
        type="text"
        placeholder='Den'
        className=''
      />

      <label>Handle:</label>
      <input
        value={values.handle || ''}
        onChange={handleChange}
        name='handle'
        type="text"
        placeholder='Den'
        className=''
      />

      <button className=''>Register</button>

    </form>
  )
};
